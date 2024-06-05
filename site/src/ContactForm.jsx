import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [statusbad, setStatusbad] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: `${name} ${lastName}`,
            company_name: companyName,
            email: email,
            phone: phone,
            message: message,
        };

        emailjs
            .send(
                "service_oauap6c",
                "template_omxwu1q",
                templateParams,
                "HemjDFbCtwuouLVFf"
            )
            .then(() => {
                setStatus("Message sent successfully!");
                setTimeout(() => {
                    setStatus("");
                }, 3000);
            })
            .catch((error) => {
                setStatus("Failed to send message. Please try again later.");
                console.error("Error sending email:", error);
                setTimeout(() => {
                    setStatus("");
                }, 3000);
            });
    };

    return (
        <form className="formulaire" onSubmit={handleSubmit}>
            <div className="container-form-left">
                <h1>Let's Chat</h1>
                <p className="form-p1">
                    Contact me for any information or to start a project. Fill
                    out the form below and I'll respond as soon as possible
                </p>
                <p className="form-p2">
                    Your device screen is too small to display the form
                    effectively. Please try accessing this page from a larger
                    device or a desktop computer for a better experience
                </p>
            </div>
            <div className="container-form-right">
                <div className="name-info">
                    <input
                        type="text"
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Type your name"
                        required
                    />
                    <input
                        type="text"
                        name="LastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Type your last name"
                        required
                    />
                </div>
                <div className="company-name">
                    <input
                        type="text"
                        name="company-name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="phone">
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                    />
                </div>
                <div className="text-message">
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message"
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <button className="gh-button-general-wh button-submit">
                    <input type="submit" value="Send" />
                </button>

                <h1 className="messagebon">{status}</h1>
                <h1 className="messagepasbon">{statusbad}</h1>
            </div>
        </form>
    );
};

export default ContactForm;
