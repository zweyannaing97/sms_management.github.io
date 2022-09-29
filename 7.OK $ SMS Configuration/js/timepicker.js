function closest(e, t){ 
	return !e? false : e === t ? true : closest(e.parentNode, t);
  }
  
  container = document.getElementById("popup");
  open = document.getElementById("open");
  
  open.addEventListener("click", function(e) {
	container.style.display = "block";
	open.disabled = true;
	e.stopPropagation();
  });
  
  document.body.addEventListener("click", function(e) {
	  if (!closest(e.target, container)) {
		  container.style.display = "none";
		  open.disabled = false;
	  }
  });

const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');
const sec_element = document.querySelector('.time-picker .second .sec');

const hr_up = document.querySelector('.time-picker .hour .hr-up');
const hr_down = document.querySelector('.time-picker .hour .hr-down');

const min_up = document.querySelector('.time-picker .minute .min-up');
const min_down = document.querySelector('.time-picker .minute .min-down');

const sec_up = document.querySelector('.time-picker .second .sec-up');
const sec_down = document.querySelector('.time-picker .second .sec-down');



let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

sec_up.addEventListener('click', second_up);
sec_down.addEventListener('click', second_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);
sec_element.addEventListener('change', second_change);

function hour_change (e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(hour);
	}

	hour = e.target.value;
}

function minute_change (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(minute);
	}

	minute = e.target.value;
}

function second_change (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(second);
	}

	second = e.target.value;
}

function hour_up () {
	hour++;
	if (hour > 23) {
		hour = 0;
	}
	setTime();
	submitTime();
}
function hour_down () {
	hour--;
	if (hour < 0) {
		hour = 23;
	}
	setTime();
	submitTime();
}

function minute_up () {
	minute++;
	if (minute > 59) {
		minute = 0;
		hour++;
	}
	setTime();
	submitTime();
}
function minute_down () {
	minute--;
	if (minute < 0) {
		minute = 59;
		hour--;
	}
	setTime();
	submitTime();
}

function second_up () {
	second++;
	if (second > 59) {
		second = 0;
		minute++;
	}
	setTime();
	submitTime();
}
function second_down () {
	second--;
	if (second < 0) {
		second = 59;
		minute--;
	}
	setTime();
	submitTime();
}

function setTime () {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	sec_element.value = formatTime(second);
	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute) + ':'+formatTime(second);
}

function formatTime (time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}

function submitTime(){
	let str = $(".hr").val()+":"+ $(".min").val()+":"+ $(".sec").val();
	$("#txt_time").text(str);
	console.log(str)
	}

function setTextHr(){
	if ($(".hr").val() > 23) {
		$(".hr").val(23)
	} 
	submitTime();
	}

function setTextMin(){
	if ($(".min").val() > 59) {
		$(".min").val(59)
	} 
	submitTime();
}
function setTextSec(){
	if ($(".sec").val() > 59) {
		$(".sec").val(59)
	} 
	submitTime();
}