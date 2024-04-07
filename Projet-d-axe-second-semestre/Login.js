const form = document.getElementById("formulaire");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    document.createElement("li").innerText =
      "Le champ email ne peut pas être vide";

    errorList.appendChild(document.createElement("li"));
  } else {
    email.classList.add("success");
  }

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champs doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let password = document.querySelector("#password");

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (password.value.length < 10 || passCheck.test(password.value) == false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit etre 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";

    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }
  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");
  if (
    pseudo.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});



const formulaire = document.getElementById("inscription-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const result = await response.json();

  const token = result.token;

  localStorage.setItem("token", token);
});
