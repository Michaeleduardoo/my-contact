document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const subject = "Contato do site de " + name;
    const body =
      "Nome: " + name + "\nEmail: " + email + "\nMensagem: " + message;

    const mailtoLink =
      "mailto:michaeledu2018@gmail.com" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  });
});
