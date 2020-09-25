const btn = document.getElementById("btn");

const ul = document.getElementById("god");
btn.addEventListener("click", getAPI);

function getAPI() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);

    xhr.onload = function (e) {
        if (this.status === 200) {
            let output = "";
            let response = JSON.parse(this.responseText);

            response.forEach(comment => {
                output += `<h2>${comment.email}</h2>
                            <li>${comment.body}</li>`;
            });

            ul.innerHTML = output;
        }
    }

    xhr.send();
}