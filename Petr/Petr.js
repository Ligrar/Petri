console.log("Madcon huesos")
let offset = 0;
const sliderline = document.querySelector('.sliderline')


document.querySelector('.buttonright').addEventListener('click', function(){
    offset = offset + 180 ; 
    if (offset > 720 ) {
        offset = 0 ;
    }
    sliderline.style.left = -offset + 'px';
});

document.querySelector('.buttonleft').addEventListener('click', function(){
    offset = offset - 180 ; 
    if (offset < 0) {
        offset = 720 ;
    }
    sliderline.style.left = -offset + 'px';
});