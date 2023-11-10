window.onload = function () {
  move();
};
var index = 1;
var index2 = 0;
function switchImage() {
  // for(var i = 1; i < 10; i++){
  //     (function (index){
  //         setTimeout(function() {
  showImage(index);
  index++;
  if(index >= 10) index = 1;
  //         },500 * index);
  //     })(i);
  // }
}
function showImage(index) {
  let a = document.getElementById("spiderman");
  a.src = "images/" + index + ".gif";
}
function switchImageCity() {
  // for(var i = 0; i < 59; i++){
  //     (function (index){
  //         setTimeout(function(){
  showImageCity(index2);
  index2++;
  if(index2 >= 59) index2 = 0;
  //         },1000 * index);
  //     })(i);
  // }
}
function showImageCity(index) {
  let a = document.getElementById("city");
  if (index < 10) {
    a.src = "images/cities/frame_0" + index + "_delay-0.03s.gif";
  } else {
    a.src = "images/cities/frame_" + index + "_delay-0.03s.gif";
  }
}
function move() {
  let b = 1.5;
  setInterval(function () {
    switchImage();
    switchImageCity();
    let a = document.getElementById("spiderman");
    a.style.right = b + "%";
    b = b + 5;
    if (b >= 86.5) {
      b = 1.5;
    }
  }, 200);
}

const imageUrls = [
    'images/meme0.png',
    'images/meme1.png',
    'images/meme2.png'
];

function createRandomDiv() {
    const $div = $('<div>').css({
        position: 'absolute',
        width: getRandomNumber(50, 300) + 'px',
        height: getRandomNumber(200, 500) + 'px',
        top: getRandomNumber(0, window.innerHeight - 200) + 'px',
        left: getRandomNumber(0, window.innerWidth - 200) + 'px'
    });

    const $img = $('<img>').attr('src', getRandomImageUrl()).css({
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    });

    // Apply random rotation and flip transformations
    const randomRotation = getRandomNumber(0, 360);
    const randomFlipX = Math.random() < 0.5;
    const randomFlipY = Math.random() < 0.5;
    $img.css('transform', `rotate(${randomRotation}deg) scaleX(${randomFlipX ? -1 : 1}) scaleY(${randomFlipY ? -1 : 1})`);

    $div.append($img);
    $('body').append($div);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImageUrl() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

function button() {
    setInterval(createRandomDiv, 200);
}
