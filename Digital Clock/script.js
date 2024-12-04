let clock=document.getElementById('clock')

setInterval(function(){
    let time=new Date()
    clock.innerHTML=time.toLocaleTimeString('en-US', { hour12: true })
},1000)