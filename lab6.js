//Zadanie 1
function obliczSilnie() {
    const input = document.getElementById("silnia");
    const liczba = parseInt(input.value);
    let wynik = 1;

    if (liczba < 0) {
        document.getElementById("wynik").innerHTML = "Silnia nie jest zdefiniowana dla liczb ujemnych.";
        return;
    }
    else{
    for (let i = 2; i <= liczba; i++) {
        wynik *= i;
    }
    }
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}
//Zadanie 2
  function zmienKolor(clickedButton) {
      const buttons = document.querySelectorAll(".color-btn");
      buttons.forEach(btn => btn.classList.remove("active"));
      clickedButton.classList.add("active");
    }
//Zadanie 3
   function Widocznosc() {
    const elem = document.getElementById("ukrytyElement");
        if (elem.style.visibility === "hidden") {
            elem.style.visibility = "visible";
        } else {
            elem.style.visibility = "hidden";
        }
    }
//Zadanie 4
    document.getElementById("dodaj").addEventListener("click", function () {
    const input = document.getElementById("text");
    const tekst = input.value.trim();

    if (tekst !== "") {
        const li = document.createElement("li");
        li.textContent = tekst;
        document.getElementById("lista").appendChild(li);
        input.value = "";
    }

});
//Zadanie 5
document.getElementById("dodajTabel").addEventListener("click", function () {
  const imie = document.getElementById("imie").value.trim();
  const nazwisko = document.getElementById("nazwisko").value.trim();

  if (imie !== "" && nazwisko !== "") {
    const tabela = document.getElementById("tabela");
    const nowyWiersz = tabela.insertRow(); 
    const komorkaImie = nowyWiersz.insertCell(); 
    const komorkaNazwisko = nowyWiersz.insertCell(); 

    komorkaImie.textContent = imie;
    komorkaNazwisko.textContent = nazwisko;

    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
  }
});


