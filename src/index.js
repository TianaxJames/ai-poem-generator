function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function createPoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt");
  let apiKey = "4e8o5847ea5bt28f13d011c45acd0fe9";
  let prompt = `write a short poem about ${promptInput.value}`;
  let context =
    "You know many topics and can be very poetic, write a short answer and separate each line with a <br/>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem...");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
