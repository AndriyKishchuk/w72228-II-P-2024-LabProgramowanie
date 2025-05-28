/*Zadanie 2*/
const imie_1=document.getElementById("imie")
imie_1.addEventListener('blur',()=>{
    const imie=imie_1.value
    if(imie){
    alert(`Witaj ${imie}`)
    }
    else{
        alert("Witaj!");
    }
});
/*Zadanie 3*/
const hasloInput = document.querySelector("#haslo");
const check = document.querySelector("#pokazHaslo");

check.addEventListener("change", () => {
  if (check.checked) {
    hasloInput.type = "text";
    hasloInput.textContent="Ukryj haslo";
  } else {
    hasloInput.type = "password";
    hasloInput.textContent="Pokaz haslo";
  }
});
/*Zadanie 4*/
const form = document.querySelector("form");
const hobbiesList = document.getElementById("listaHobby");

function hobbies() {
  const selectHobbies = document.querySelectorAll('input[name="hobby"]:checked');

  hobbiesList.innerHTML = "";

  selectHobbies.forEach(hobby => {
    const item = document.createElement("li");
    item.textContent = hobby.value;
    hobbiesList.appendChild(item);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();
  hobbies();
});
/*Zaddanie 5*/
const telefonInput = document.querySelector("#telefon");
const checktelefon = document.querySelector("#pokaztelefon");

checktelefon.addEventListener("change", () => {
  if (checktelefon.checked) {
    telefonInput.type = "text";
    telefonInput.textContent="Ukryj telefon";
  } else {
    telefonInput.type = "password";
    telefonInput.textContent="Pokaz telefon";
  }
});
//Zad 6
const countySelect=document.querySelector('#Kraj');
const franceOption=new Option('Francja','FR');
const franceOption_1=new Option('USA','USA');
countySelect.add(franceOption);
countySelect.add(franceOption_1);