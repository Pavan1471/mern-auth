import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is broadband?",
            answer: "Broadband is a high-speed internet connection that provides fast access to the internet, allowing you to download and upload data quickly."
        },
        {
            question: "What types of broadband connections are available?",
            answer: "There are several types of broadband connections, including DSL, cable, fiber-optic, satellite, and wireless."
        },
        {
            question: "How can I check if broadband is available in my area?",
            answer: "You can check availability by entering your address on our website or by contacting our customer support."
        },
        {
            question: "What speeds can I expect from my broadband connection?",
            answer: "Speeds vary depending on the plan you choose, but we offer plans ranging from 10 Mbps to 1 Gbps."
        },
        {
            question: "How do I troubleshoot my broadband connection?",
            answer: "If you are experiencing issues, try restarting your modem and router, checking for outages in your area, and ensuring all cables are securely connected."
        },
        {
            question: "What should I do if I have a complaint about my service?",
            answer: "You can submit a complaint through our complaint form, and our customer support team will contact you shortly."
        }
    ];

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h2>Frequently Asked Questions (FAQ)</h2>
            {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
