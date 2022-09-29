function closest4(e, t){ 
	return !e? false : e === t ? true : closest4(e.parentNode, t);
  }
  
  container4 = document.getElementById("popup4");
  open4 = document.getElementById("open4");
  
  open4.addEventListener("click", function(e) {
	container4.style.display = "block";
	open4.disabled = true;
	e.stopPropagation();
  });
  
  document.body.addEventListener("click", function(e) {
	  if (!closest4(e.target, container4)) {
		  container4.style.display = "none";
		  open4.disabled = false;
	  }
  });

const time_picker_element4 = document.querySelector('.time-picker4');

const hr_element4 = document.querySelector('.time-picker4 .hour4 .hr4');
const min_element4 = document.querySelector('.time-picker4 .minute4 .min4');
const sec_element4 = document.querySelector('.time-picker4 .second4 .sec4');

const hr_up4 = document.querySelector('.time-picker4 .hour4 .hr-up4');
const hr_down4 = document.querySelector('.time-picker4 .hour4 .hr-down4');

const min_up4 = document.querySelector('.time-picker4 .minute4 .min-up4');
const min_down4 = document.querySelector('.time-picker4 .minute4 .min-down4');

const sec_up4 = document.querySelector('.time-picker4 .second4 .sec-up4');
const sec_down4 = document.querySelector('.time-picker4 .second4 .sec-down4');



let d4 = new Date();

let hour4 = d4.getHours();
let minute4 = d4.getMinutes();
let second4 = d4.getSeconds();
setTime4();

// EVENT LISTENERS
hr_up4.addEventListener('click', hour_up4);
hr_down4.addEventListener('click', hour_down4);

min_up4.addEventListener('click', minute_up4);
min_down4.addEventListener('click', minute_down4);

sec_up4.addEventListener('click', second_up4);
sec_down4.addEventListener('click', second_down4);

hr_element4.addEventListener('change', hour_change4);
min_element4.addEventListener('change', minute_change4);
sec_element4.addEventListener('change', second_change4);

function hour_change4 (e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime4(hour4);
	}

	hour4 = e.target.value;
}

function minute_change4 (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime4(minute4);
	}

	minute4 = e.target.value;
}

function second_change4 (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime4(second4);
	}

	second4 = e.target.value;
}

function hour_up4 () {
	hour4++;
	if (hour4 > 23) {
		hour4 = 0;
	}
	setTime4();
	submitTime4();
}
function hour_down4 () {
	hour4--;
	if (hour4 < 0) {
		hour4 = 23;
	}
	setTime4();
	submitTime4();
}

function minute_up4 () {
	minute4++;
	if (minute4 > 59) {
		minute4 = 0;
		hour4++;
	}
	setTime4();
	submitTime4();
}
function minute_down4 () {
	minute4--;
	if (minute4 < 0) {
		minute4 = 59;
		hour4--;
	}
	setTime4();
	submitTime4();
}

function second_up4 () {
	second4++;
	if (second4 > 59) {
		second4 = 0;
		minute4++;
	}
	setTime4();
	submitTime4();
}
function second_down4 () {
	second4--;
	if (second4 < 0) {
		second4 = 59;
		minute4--;
	}
	setTime4();
	submitTime4();
}

function setTime4 () {
	hr_element4.value = formatTime4(hour4);
	min_element4.value = formatTime4(minute4);
	sec_element4.value = formatTime4(second4);
	time_picker_element4.dataset.time = formatTime4(hour4) + ':' + formatTime4(minute4) + ':'+formatTime4(second4);
}

function formatTime4 (time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}

function submitTime4(){
	let str = $(".hr4").val()+":"+ $(".min4").val()+":"+ $(".sec4").val();
	$("#txt_time4").text(str);
	console.log(str)
	}

function setTextHr4(){
	if ($(".hr4").val() > 23) {
		$(".hr4").val(23)
	} 
	submitTime4();
	}

function setTextMin4(){
	if ($(".min4").val() > 59) {
		$(".min4").val(59)
	} 
	submitTime4();
}
function setTextSec4(){
	if ($(".sec4").val() > 59) {
		$(".sec4").val(59)
	} 
	submitTime4();
}
