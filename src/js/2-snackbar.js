const form = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: ""
};

form.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = parsedData;

  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}
form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem("feedback-form-state");

  formData.email = "";
  formData.message = "";
});