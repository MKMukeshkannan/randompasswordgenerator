
const generatePassword = (len, numbers, upperCase, lowerCase, symbols) => {
	let charSet = '';

	if (numbers) {
		charSet += "1234567890"
	}
	if (upperCase) {
		charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	}
	if (lowerCase) {
		charSet += "abcdefghijklmnopqrstuvwxyz"
	}
	if (symbols) {
		charSet += "!@#$-_"
	}

	let passwordArray = [];
	while (passwordArray.length < len) {
		const char = charSet[Math.floor(Math.random() * charSet.length )];
			passwordArray.push(char);
	}
	return passwordArray.join('')
}

const handleClick = () => {
	const pass = generatePassword(slider.value, number.checked, upper.checked, lower.checked, symbols.checked);
	const passwordLable = document.getElementById("result")
	if (!pass) {
		alert("PLEASE SELECT ANY OPTION")
	}
	passwordLable.innerHTML = pass;

}

const slider = document.querySelector("#slider")
const lenLable = document.querySelector("#lenLable")
const upper = document.querySelector("#uppercase")
const lower = document.querySelector("#lowercase")
const number = document.querySelector("#number")
const symbols = document.querySelector("#symbol")

const genButton = document.querySelector("#generate")

genButton.addEventListener("click", handleClick);

slider.oninput = function () {
	lenLable.innerHTML = this.value;
}


