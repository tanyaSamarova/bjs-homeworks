"use strict";

//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
	return this.toLowerCase().replace('') === this.toLowerCase().replace('').split('').reverse().join('');
}

function getAverageMark(marks) {
	// код для задачи №2 писать здесь

	if (marks.length === 0) return 0;

	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	let roundedAverage = Math.round(sum / marks.length);
	return roundedAverage;

	// return averageMark
}

function checkBirthday(birthday) {
	// код для задачи №3 писать здесь
	
    // return verdict