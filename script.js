const name = prompt("Welkom, wat is je naam?");

console.log(`Hey ${name}`);

const minimalNumber = prompt("wat is het kleinste getal dat je wil raden?");

const maximalNumber = prompt("Wat is het grootste getal dat je wil raden?");

const randomNumber = Math.floor(Math.random() * (maximalNumber - minimalNumber) + minimalNumber);

function game() {
  for (i = 0; i < 5; i++) {
    let guess = prompt(
    `Voer een nummer in van ${minimalNumber} tot ${maximalNumber} om te beginnen met raden...`
    );
    if (guess != randomNumber) {
      console.log("Dat is niet correct");
    } if (i === 4) {
      console.log("Game over");
    } else if (guess === randomNumber) {
      console.log("Gefeliciteerd, je hebt gewonnen!");
      console.log(`Dag ${name}. Tot de volgende keer`);
      i = 4;
    }
  }
}

game();