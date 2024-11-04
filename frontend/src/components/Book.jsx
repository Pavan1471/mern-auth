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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/book', formData);
            alert('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting data');
        }
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
        </center>
    );
};

export default Book;
