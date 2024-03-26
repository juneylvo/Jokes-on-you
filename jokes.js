const jokebutton = document.getElementById('button');
const jokes = document.getElementById('joke');

const apikey = "gNCH8zKcv/bFfuFGxY3FkA==mIs4WOwYnVm6nsvG";
const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit = 1";

async function getjoke(){
    try {
        jokes.innerText = "Updating...";
        jokebutton.disabled = true;
        jokebutton.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        jokebutton.disabled = false;
        jokebutton.innerText = "Tell me a joke";
    
        joke.innerText = data[0].joke;
      } catch (error) {
        joke.innerText = "An error happened, try again later";
        jokebutton.disabled = false;
        jokebutton.innerText = "Tell me a joke";
        console.log(error);
      }
    }
jokebutton.addEventListener("click", getjoke);