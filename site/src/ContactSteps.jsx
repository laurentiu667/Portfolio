import React, { useState } from 'react';
import video from "../video/liquid.mp4";
import cycle7 from "../img/cycle7.jpg";
import cycle7v2 from "../img/cycle7v2.jpg";
import f1 from "../img/f18x.jpg";
import f12 from "../img/f18x2.jpg";

function ContactSteps() {
    const [selectedImage, setSelectedImage] = useState('');

    const steps = [
        { id: 1, title: "Envoi d'un formulaire de contact", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corrupti!", image: cycle7 },
        { id: 2, title: "Prise de rendez-vous", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corrupti!", image: cycle7v2 },
        { id: 3, title: "Confirmation du rendez-vous", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corrupti!", image: f1 },
        { id: 4, title: "Rappel avant le rendez-vous", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corrupti!", image: f12 }
    ];

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <section className="contactSteps">
                <div className="container-steps">
                    <div className="info-steps-contact">
                        <h3>COMMENT ÇA MARCHE</h3>
                        <h1>
                            LA GESTION D’UN RENDEZ VOUS PERSONNELLE SIMPLIFIÉ EN
                            4 ÉTAPES
                        </h1>
                    </div>

                    <div className="bottom-contact">
                        <div className="info-text-steps-container">
                            {steps.map((step) => (
                                <div key={step.id} className="container-mini-steps" onClick={() => handleClick(step.image)}>
                                    <div className="div-button-text-steps">
                                        <button className="button-steps">
                                            <a href="">{step.id}</a>
                                        </button>
                                        <h2>{step.title}</h2>
                                    </div>
                                    <div className="text-progress-line">
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-steps-container">
                            {selectedImage && <img src={selectedImage} alt="Step Illustration" />}
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactSteps;
