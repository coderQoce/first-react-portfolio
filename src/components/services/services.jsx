import React, { useState } from 'react';
import './services.css';

const ServiceItem = ({ iconClassName, title, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="services_content">
            <span className={`services_icon ${iconClassName}`}></span>
            <h3 className="services_title">{title}</h3>
            <button className="services_button" onClick={handleButtonClick}>
                View More
                <span className="services_button-icon">→</span>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="services_modal">
                    <div className="services_modal-content">
                        <button
                            className="services_modal-close"
                            onClick={handleButtonClick}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <h3 className="services_modal-title">{title}</h3>
                        <p className="services_modal-description">{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const Services = () => {
    const servicesData = [
        {
            icon: 'uil uil-web-grid',
            title: 'Web Design',
            description: 'Skilled in creating responsive and visually appealing website using HTML, CSS, JavaScript, React.js, and Tailwind CSS. Projects include a Personal Portfolio, an Ecommerce Website, and a Blog Site with real-time updates and user authentication...',
        },
        {
            icon: 'uil uil-mobile-android-alt',
            title: 'Web Development',
            description: 'Experienced in architecting and developing high-performance web applications with precision and scalability.',
        },
        {
            icon: 'uil uil-mobile-android-alt',
            title: 'Back-End Development ',
            description: 'Specialized in developing robust back-end solutions for web applications, ensuring efficiency, security, and scalability..',
        },
    ];
    return (
        <section id='service' className='grid services_container'>
            {servicesData.map((service) => (
                <ServiceItem
                    key={service.title}
                    iconClassName={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </section>
    );
};

export default Services;

