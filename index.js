console.log('index')
document.getElementById('spaint').innerHTML="test"

//Zad 1
function zmienTekst(){
    alert("Witaj na stronie")
}
const test=1;
console.log("Test"+test+ "Test2");

const liczba="5";
//console.log(liczba + liczba)
//console.log(+liczba + +liczba)

//Zadanie 2
for(let i =0; i<100;i+=2 ){
console.log(i)
}
//Zadanie 3
const a=+prompt("Podaj a")
const b=+prompt("Podaj b")
alert(a+b)
//Zadanie 4
const clock=document.getElementById('clock');
setInterval(() => {
    const date=new Date();
    const hour=date.getHours();
    const minute=date.getMinutes();
    const seconds=date.getSeconds();
    document.getElementById('clock')
      clock.innerHTML = `${hour}:${minute}:${seconds}`
}, 1000);
//Zadanie 5
const guestNumberElement=document.getElementById('guess')
const number=Math.floor(Math.random()*100)
let trys=0
function Trys(){
    trys++
    const value=+guestNumberElement.value
    if (value===number){
        alert(`Zgadles za ${trys}`)
    }
    else if(value>number){
            alert("Liczba jest mniejsza")
        }
        else if(value<number){
            alert("Liczba jest wieksza")
        } 
    }



