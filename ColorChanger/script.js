const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id){
            body.style.backgroundColor=e.target.id;
        }
    });
}