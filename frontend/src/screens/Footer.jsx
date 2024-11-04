import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <h3>About Us</h3>
                <p>
                    We are dedicated to providing reliable and high-speed broadband services to our customers. Our goal is to ensure seamless connectivity to help you stay connected with your world.
                </p>
                <h4>Contact Us</h4>
                <p>Email: support@yourbroadbandservice.com</p>
                <p>Phone: 1-800-555-0199</p>
                <h4>Follow Us</h4>
                <p>
                    <a href="https://www.facebook.com/YourBroadbandService" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                    <a href="https://twitter.com/YourBroadbandService" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                    <a href="https://www.instagram.com/YourBroadbandService" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
            </div>
            <div style={rightsStyle}>
                <p>&copy; {new Date().getFullYear()} Your Broadband Service. All rights reserved.</p>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '20px'
};

const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
};

const rightsStyle = {
    marginTop: '15px',
};

export default Footer;
