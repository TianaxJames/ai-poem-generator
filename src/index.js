function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "roses are red, violets are blue",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
