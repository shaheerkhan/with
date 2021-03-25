let video = document.querySelector('.container video');
let btn= document.querySelector('.play-pause-btn');
let value = document.querySelector('.value')

function playpausebtn(){
    if(video.paused){
        btn.className = 'pause';
        video.play()
    }
    else{
        btn.className = 'play';
        video.pause()
    }
}

btn.onclick = function(){
    playpausebtn()
}
video.addEventListener('timeupdate' , function(){
    var rangv = video.currentTime / video.duration;
    value.style.width = rangv * 100 + "%"; 
    console.log(rangv);
})


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});