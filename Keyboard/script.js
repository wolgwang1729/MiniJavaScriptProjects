keydiv=document.querySelector('#key');

window.addEventListener('keydown',function(e){
    keydiv.innerHTML=`<h1>You pressed ${e.key===" "?'space':e.key} and its code is ${e.keyCode}</h1>`;
});