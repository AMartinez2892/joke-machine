const jokeBtn = document.getElementById("get-joke");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

jokeBtn.addEventListener("click", function() {
    setup.textContent = "Loading...";
    punchline.textContent = "";
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            setup.textContent = data.setup;
            punchline.textContent = data.punchline;
        })
        .catch(error => {
            setup.textContent = "Couldn't get a joke. check your connection and try again.";
            punchline.textContent = "";
            console.log(error);
        });
});