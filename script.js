//Zadanie 1
const ksiazka={
    tytul:"Pan Tadeusz",
    autor:"Adam Mickiewicz",
    rokWydania:1834
};
function infKsziazka(ksiazka){
    return `${ksiazka.tytul}-${ksiazka.autor} (${ksiazka.rokWydania})`;
}
console.log("Zadanie 1:",infKsziazka(ksiazka));
//Zadanie 2
const student ={
    imie:"Andrii",
    nazwisko:"Kishchuk",
    numberAlbumu:"32332",
    oceny:{
        matematyka:4,
        informatyka:5,
        programowanie:3,
    }
};

const oceny=Object.values(student.oceny);
const srednia=oceny.reduce((suma,ocena)=> suma+ocena,0)/oceny.length;
console.log("Srednia ocen:",srednia)
//Zadanie 3 i 4
const samochod={
    marka:"Audi",
    model:"A5",
    rok:2018,
    kolor:"niebielski",
    predkosc:100,

zwiekszPredkosc(wartosc){
    this.predkosc +=wartosc;
},
zmniejszPredkosc(wartosc){
    this.predkosc -=wartosc;
},
info(){
    return `${this.marka} ${this.model} (${this.rok}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
},
wiek(){
    const rokteraz=new Date().getFullYear();
    return rokteraz-this.rok;

}
};
samochod.zwiekszPredkosc(20);
samochod.zmniejszPredkosc(10);
console.log(samochod.info());
console.log(samochod.wiek(),"lat");

//Zadanie 5 i 6
function stworzProstokat(){
    const dl=parseFloat(document.getElementById("dlugosc").value);
    const sz=parseFloat(document.getElementById("szerokosc").value);

    const prostokat={
        dlugosc:dl,
        szerokosc:sz,
        pole(){
            return this.dlugosc * this.szerokosc;
        },
        obwod(){
            return 2*(this.dlugosc+this.szerokosc);

        },
        czyKwadrat(){
            return this.dlugosc===this.szerokosc;

        }
    };
    const wynik=`
    Pole: ${prostokat.pole()}<br>
    Obwod:${prostokat.obwod()}<br>
    Czy to kwadrat? ${prostokat.czyKwadrat() ? "Tak":"Nie"}
 `;
 
 document.getElementById("wynik").innerHTML=wynik;
}