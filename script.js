//your JS code here. If required.

let i = 0;
setInterval(()=>{
	i += 20;
	document.querySelector("#line").style.transform = `rotate(${i}deg)`
}, 20);