//Zadanie 1
function checkAge() {
    const age = parseInt(prompt("Podaj swój wiek: "), 10);

    if (isNaN(age)) {
        console.log("Podana wartość nie jest liczbą.");
        return;
    }

    if (age >= 18) {
        console.log("Jesteś pełnoletni.");
    } else {
        console.log("Nie jesteś pełnoletni.");
    }
}
checkAge();
//Zadanie 2
function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(prompt("Podaj temperaturę w stopniach Celsjusza: "));

    if (isNaN(celsius)) {
        console.log("Podana wartość nie jest liczbą.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C to ${fahrenheit.toFixed(2)}°F.`);
}
convertCelsiusToFahrenheit();
//Zadanie 3
function arrayOperations() {
    const numbers = [5, 12, 8, 21, 7, 3, 18];

    // Zsumuj wartości
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("Suma wartości:", sum);

    // Znajdź liczby parzyste
    const parzyste = numbers.filter(num => num % 2 === 0);
    console.log("Liczby parzyste:", parzyste);

    // Pomnóż wartości razy 3
    const Tree = numbers.map(num => num * 3);
    console.log("Wartości pomnożone razy 3:", Tree);

    // Dodaj do tablicy swój numer albumu i znajdź jego index
    const albumNumber = 72228;
    numbers.push(albumNumber);
    console.log("Tablica po dodaniu numeru albumu:", numbers);
    const albumIndex = numbers.indexOf(albumNumber);
    console.log("Index numeru albumu:", albumIndex);

    // Oblicz średnią arytmetyczną
    const average = sum / numbers.length;
    console.log("Średnia arytmetyczna:", average);

    // Znajdź największą liczbę
    const maxNumber = Math.max(...numbers);
    console.log("Największa liczba:", maxNumber);

    // Zlicz ilość wystąpień wybranej wartości
    const value = 8;
    const liczba = numbers.filter(num => num === value).length;
    console.log(`Ilość wystąpień wartości ${value}:`, liczba);
}
arrayOperations();
//Zadanie 4
function Fibonacci() {
    const fibonacci = [0, 1];
    for (let i = 2; i < 100; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    console.log("Tablica 100 liczb ciągu Fibonacciego:", fibonacci);
}
Fibonacci();