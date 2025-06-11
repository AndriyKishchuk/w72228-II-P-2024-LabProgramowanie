// Funkcje do obsługi błędów
function showError(element, message) {
  element.textContent = message;
  element.style.display = "inline";
}

function clearError(element) {
  element.textContent = "";
  element.style.display = "none";
}

// Sprawdzenie minimalnej długości (Zadanie 2)
function checkMinimumLength(input, errorElement, minLength) {
  const value = input.value.trim();
  if (value.length < minLength) {
    showError(errorElement, `Wartość musi mieć co najmniej ${minLength} znaki.`);
    return false;
  }
  clearError(errorElement);
  return true;
}

// Sprawdzenie poprawności emaila (Zadanie 2)
function checkEmail(input, errorElement) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(input.value.trim())) {
    showError(errorElement, "Nieprawidłowy email.");
    return false;
  }
  clearError(errorElement);
  return true;
}

// Sprawdzenie hasła (Zadanie 3)
function checkPassword(input, errorElement) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!pattern.test(input.value)) {
    showError(
      errorElement,
      "Hasło musi zawierać min. 8 znaków, dużą i małą literę oraz cyfrę."
    );
    return false;
  }
  clearError(errorElement);
  return true;
}

// Sprawdzenie powtórzonego hasła (Zadanie 3)
function checkRepeatPassword(passwordInput, repeatInput, errorElement) {
  if (passwordInput.value !== repeatInput.value) {
    showError(errorElement, "Hasła nie są identyczne.");
    return false;
  }
  clearError(errorElement);
  return true;
}

// Sprawdzenie pełnoletności (Zadanie 2)
function checkAdult(input, errorElement) {
  const birthDate = new Date(input.value);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    showError(errorElement, "Musisz być pełnoletni.");
    return false;
  }
  clearError(errorElement);
  return true;
}

