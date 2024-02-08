import React from 'react';
import './QRComponent.css';

const QRCodeComponent: React.FC = () => {
    return(
        <div className='qr-container'>
            <img src='./images/image-qr-code.png' alt='QR Code' className='qr-image'/>
            <div className='qr-info'>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
};

export default QRCodeComponent;