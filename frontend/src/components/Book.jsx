import React, { useState } from 'react';
import axios from 'axios';

const Book = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        pincode: '',
        address: ''
    });

    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/book', formData);
            setSubmittedData(formData); // Store the submitted data
            setShowModal(true); // Show the modal
            setFormData({ name: '', mobile: '', email: '', pincode: '', address: '' }); // Clear the form
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting data');
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <center>
            <div className="card" style={{ marginBottom: "20px" }}>
                <span className="title">Book your connection today</span>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="group">
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                        <label>Name</label>
                    </div>
                    <div className="group">
                        <input type="number" name="mobile" required value={formData.mobile} onChange={handleChange} />
                        <label>Mobile</label>
                    </div>
                    <div className="group">
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                        <label>Email</label>
                    </div>
                    <div className="group">
                        <input type="number" name="pincode" required value={formData.pincode} onChange={handleChange} />
                        <label>Pincode</label>
                    </div>
                    <div className="group">
                        <textarea name="address" rows="5" required value={formData.address} onChange={handleChange}></textarea>
                        <label>Address</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Modal for confirmation message */}
            {showModal && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <h3>Booking Submitted Successfully</h3>
                        <p>Thank you, {submittedData.name}. We will contact you soon!</p>
                        <p><strong>Address:</strong> {submittedData.address}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </center>
    );
};

// Styles for the modal
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    }
};

export default Book;
