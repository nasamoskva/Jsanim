window.onload = function(){
    move();
}
function switchImage(){
    for(var i = 1; i < 10; i++){
        (function (index){
            setTimeout(function() {
                showImage(index);
            },500 * index);
        })(i);
    }
}
function showImage(index){
    let a = document.getElementById('spiderman');
    a.src = 'images/' + index + '.gif';
}
function switchImageCity(){
    for(var i = 0; i < 59; i++){
        (function (index){
            setTimeout(function(){
                showImageCity(index);
            },1000 * index);
        })(i);
    }
}
function showImageCity(index){
    let a = document.getElementById('city');
    if(index < 10){
        a.src = 'images/cities/frame_0' + index + '_delay-0.03s.gif';
    }
    else {
        a.src = 'images/cities/frame_' + index + '_delay-0.03s.gif';
    }
}
function move(){
    let b = 1.5;
    setInterval(function() {
        switchImage();
        switchImageCity();
        let a = document.getElementById('spiderman');
        a.style.right = b + '%';
        b = b + 5;
        if(b >= 86.5){
            b = 1.5;
        }
    },1000)
}