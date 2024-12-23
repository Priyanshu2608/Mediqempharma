import React from "react";
import "./Firstpart.css";


const Firstpart = () => {
    const boxData = [
        {
            title: "Our Aim",
            description:
                'At MediqemPharma, our aim is to revolutionize healthcare by developing, manufacturing, and delivering high-quality pharmaceutical products that improve the lives of people worldwide. Guided by our tagline, "Committed to Quality," we strive for excellence in every aspect of our operations—from innovation and production to customer satisfaction and social responsibility. Our focus is on advancing medical solutions that are accessible, safe, and effective while upholding ethical practices and sustainability.',
        },
    ];

    const cardData = [
        {
            title: "Innovation",
            description: "Pioneering medical advancements for better healthcare solutions.",
            imageUrl: "https://www.worldpharmatoday.com/wp-content/uploads/2022/01/pharmaceutical-companys-Innovations.jpg",
        },
        {
            title: "Quality",
            description: "Ensuring high standards in all our products and services.",
            imageUrl: "https://www.aaps.ca/wp-content/uploads/Jan-11-pharmaceutical-quality-assurance.jpg",
        },
        {
            title: "Sustainability",
            description: "Committed to environmentally friendly practices.",
            imageUrl: "https://assets.technologynetworks.com/production/dynamic/images/content/378612/a-spotlight-on-sustainability-in-pharma-and-biopharma-378612-960x540.jpg?cb=12537158",
        },
    ];

    return (
        <div className="container">
            <div className="boxes">
                {boxData.map((box, index) => (
                    <div className="box" key={index}>
                        <h2>{box.title}</h2>
                        <h4>{box.description}</h4>
                    </div>
                ))}
            </div>
            <div className="cards">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.imageUrl} alt={`Image for ${card.title}`} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Firstpart;
