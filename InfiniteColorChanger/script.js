body = document.querySelector('body');
let sid;
// body.style.backgroundColor = 'black';
// console.log(body.style.backgroundColor);
start.addEventListener('click', function(){
    sid = setInterval(function(){
        rand1=Math.floor(Math.random()*256);
        rand2=Math.floor(Math.random()*256);
        rand3=Math.floor(Math.random()*256);
        body.style.backgroundColor = `rgb(${rand1},${rand2},${rand3})`;
    }, 1000);
});

end.addEventListener('click', function(){
    clearInterval(sid);
});