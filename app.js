const URL = "https://v2.jokeapi.dev/joke/Any";
const jokesPara = document.querySelector("#jokes");
const btn = document.querySelector("#btn");




const getJok = async () => {
  console.log("getting data............");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();

  jokesPara.innerText = data.setup;
};



// btn.addEventListener("click", getJok);
