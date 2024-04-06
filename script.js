function validEmail(str) {
  //your JS code here.
	let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return pattern.test(str);
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));