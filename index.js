
import qr from "qr-image";
/*
import fs from "fs";

document.querySelector('#url-text').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var url = document.getElementById('url-text').value;
    generateQRCode(url); 
     /* var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('urlqr.png')); 
});

function generateQRCode(text) {
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear previous QR code if any
    var urlimage = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200
    });
}

*/

document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var url = document.getElementById('textInput').value; // Corrected to 'textInput'
    generateQRCode(url); 
});

function generateQRCode(text) {
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear previous QR code if any
    var qrCode = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200
    });
    var qr_svg = qrCode.svg;
    qr_svg.pipe(fs.createWriteStream('urlqr.png')); 
}
