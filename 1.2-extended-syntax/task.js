"use strict";

function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    let x = [];
    let D;
    D = b * b - 4 * a * c;
    if (D < 0) {
        x = x;
    } else if (D > 0) {
        x = [(- b + Math.sqrt(D)) / (2 * a), (- b - Math.sqrt(D)) / (2 * a)];

    } else {
        x = [- b / (2 * a)];
    }
    return x;
    // return x;
}



function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    let averageMark;
    if (marks.length > 5 ) {
    	console.log("Количество оценок больше 5");
        marks.splice(5);
    }    
    for (let i = 0; i < marks.length; i++) {
    	sum = sum + marks[i];
    }
    averageMark = sum / marks.length;
    
      if (!marks.length) {
        averageMark = 0; // добавила условие для 0;
    }
    // более логичное решение? 
     /* if (!marks.length) {
        averageMark = 0;
      } else if (marks.length > 5) {
        marks.splice(5);
        console.log("Количество оценок больше 5");
        averageMark = averageCalculation(marks);
      } else if (marks.length <= 5) {
        averageMark = averageCalculation(marks);
      }

     function averageCalculation(arr) {
          for (let i = 0; i < arr.length; i++) {
          sum = sum + arr[i];
        }
       return sum / arr.length;
      }*/
      
    return averageMark;
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    /*let year = new Date;*/
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
    // return result;
}