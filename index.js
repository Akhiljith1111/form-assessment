const form = document.Application;
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  let formData = new FormData(this);
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value
  });
  let json = JSON.stringify(object);
  console.log(json);
}, false);