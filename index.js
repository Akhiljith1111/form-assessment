// const form = document.Application;
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); 
//   const formData = new FormData(this);
//   const object = {};
//   formData.forEach((value, key) => {
//     object[key] = value
//   });
//   const json = JSON.stringify(object);
//   console.log(json);
//   form.reset();
// }, false);


let userID ;
let value = document.getElementById("useridHidden");
document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  fetch("https://retoolapi.dev/SoBfZA/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formDataObject)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Response Data:", data);
        form.reset()
      userID = data.id
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
});
viewButton.addEventListener("click", function() {
  fetch("https://retoolapi.dev/SoBfZA/data")
    .then(response => response.json())
    .then(data => {
      const submittedData = data[userID-1];
      console.log(typeof(submittedData))
      value.textContent = JSON.stringify(submittedData);
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
