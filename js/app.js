var mydiv = document.getElementById("app");

 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(function (response) {
   return response.json();
 }).then(function (json) {
    console.log(json);
    mydiv.innerHTML += '<ul>';
    // Usando "for of" para recorrer el array del json
    for (const element of json) {
        mydiv.innerHTML += `<li>${element.title}</li>`;
    }
    mydiv.innerHTML += '</ul>';
 });


