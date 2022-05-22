import QRCode from './image-qr-code.png';

function Card() {
    return (
        <div id="card">
            <div className="content">
                <img src={QRCode} alt="qrcode"></img>
                <div className="desp">
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
