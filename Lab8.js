// Zadanie 1: Powitanie po wpisaniu imienia
const imieInput = document.getElementById("imie");
imieInput.addEventListener("blur", () => {
  const imie = imieInput.value.trim();
  alert(imie ? `Witaj ${imie}` : "Witaj!");
});

// Zadanie 3: Pokaż / ukryj hasło
const hasloInput = document.getElementById("haslo");
const pokazHasloCheckbox = document.getElementById("pokazHaslo");
pokazHasloCheckbox.addEventListener("change", () => {
  hasloInput.type = pokazHasloCheckbox.checked ? "text" : "password";
});

// Zadanie 5
const telefonInput = document.getElementById("telefon");
const pokazTelefonCheckbox = document.getElementById("pokaztelefon");

telefonInput.addEventListener("input", () => {
  telefonInput.value = telefonInput.value.replace(/\D/g, "");
});

pokazTelefonCheckbox.addEventListener("change", () => {
  telefonInput.type = pokazTelefonCheckbox.checked ? "text" : "password";
});

// Zadanie 6
const krajSelect = document.getElementById("Kraj");
const countries = [
  { name: "Francja", code: "FR" },
  { name: "USA", code: "USA" },
  { name: "Polska", code: "PL" },
];

countries.forEach(({ name, code }) => {
  const option = new Option(name, code);
  krajSelect.add(option);
});

// Zadanie 6
const adresInput = document.getElementById("adres");
krajSelect.addEventListener("change", () => {
  adresInput.disabled = krajSelect.value === "";
});

// Zadanie 2 i 4
const form = document.getElementById("form");
const hobbyList = document.getElementById("listaHobby");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;

  // Elementy do błędów
  const imieError = document.getElementById("imieError");
  const nazwiskoError = document.getElementById("nazwiskoError");
  const emailError = document.getElementById("emailError");
  const hasloError = document.getElementById("hasloError");
  const haslo2Error = document.getElementById("haslo2Error");
  const dataError = document.getElementById("dataError");
  const telefonError = document.getElementById("telefonError");

  // Walidacje
  if (!checkMinimumLength(imieInput, imieError, 3)) valid = false;
  if (!checkMinimumLength(document.getElementById("nazwisko"), nazwiskoError, 3)) valid = false;
  if (!checkEmail(document.getElementById("email"), emailError)) valid = false;
  if (!checkPassword(hasloInput, hasloError)) valid = false;
  if (
    !checkRepeatPassword(
      hasloInput,
      document.getElementById("haslo2"),
      haslo2Error
    )
  )
    valid = false;
  if (!checkAdult(document.getElementById("data"), dataError)) valid = false;

  if (telefonInput.value.length < 7) {
    showError(telefonError, "Numer telefonu musi mieć co najmniej 7 cyfr.");
    valid = false;
  } else {
    clearError(telefonError);
  }

  if (!valid) return;

  // Wyświetlanie wybranych hobby
  hobbyList.innerHTML = "";
  const hobbies = document.querySelectorAll("input[name='hobby']:checked");
  if (hobbies.length === 0) {
    hobbyList.innerHTML = "<li>Brak wybranego hobby</li>";
  } else {
    hobbies.forEach((hobby) => {
      const li = document.createElement("li");
      li.textContent = hobby.value;
      hobbyList.appendChild(li);
    });
  }

  alert("Formularz przesłany pomyślnie!");
  form.reset();
  adresInput.disabled = true; 
});
