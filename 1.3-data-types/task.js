"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (isNaN(percent)) {
        console.log(`Параметр "Процентная ставка" содержит неправильное значение ${percent}.`)
    } else if (isNaN(contribution)) {
        console.log(`Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}.`);
    } else if (isNaN(amount)) {
        console.log(`Параметр "Сумма кредита" содержит неправильное значение ${amount}.`);
    } else {
        let bodyCredit = amount - contribution;
        let d = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
        let p = percent / 100 / 12;
        let amountPerMonth = bodyCredit * (p + p / (((1 + p) ** d) - 1));
        let totalAmount = parseFloat((amountPerMonth * d).toFixed(2));

        console.log(totalAmount);

        return totalAmount;
    }
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;

    if (!isNaN(name) || name === undefined) {
        greeting = `Привет, мир! Меня зовут Аноним`;
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }

    console.log(greeting);
    return greeting;
}
    // return greeting;
