// Задача 1

function parseCount(value) {
    let check = Number.parseInt(value);
    if (isNaN(check)) {
        throw new Error("Невалидное значение");
    }
    return check;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.sides = [a, b, c];
        const error = new Error('Треугольник с такими сторонами не существует');
        if (a + b < c) {
            throw error;
        }
        else if (a + c < b) {
            throw error;
        }
        else if (b + c < a) {
            throw error;
        }
    }

    getPerimeter() {
        return this.sides.reduce((a, b) => a + b);
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        let areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - this.sides[0]) * (halfPerimeter - this.sides[1]) * (halfPerimeter - this.sides[2]));
        return Number((areaTriangle).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {
            getArea() { return 'Ошибка! Треугольник не существует' },
            getPerimeter() { return 'Ошибка! Треугольник не существует' }
        };
    }
} 
