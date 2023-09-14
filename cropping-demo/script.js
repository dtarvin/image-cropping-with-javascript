let imagePath = "./images/mountain.jpg";
const originalImage = new Image();
originalImage.src = imagePath;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

void ctx.drawImage(originalImage, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// (sx, sy and dx, dy = top left coordinate of image, sWidth, sHeight and dWidth, dHeight = width and height of image)