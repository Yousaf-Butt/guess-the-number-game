const name = prompt("Welkom, wat is je naam?");

console.log(`Hey ${name}`);

const minNumber = prompt("wat is het laagste getal dat je wil raden?");

const maxNumber = prompt("Wat is het hoogste getal dat je wil raden?");

const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

console.log(randomNumber);

function game() {
  for (i = 0; i < 5; i++) {
    let guess = prompt(
    `Voer een nummer in van ${minNumber} tot ${maxNumber} om te beginnen met raden...`
    );
    if (guess == randomNumber) {
      console.log("Gefeliciteerd, je hebt gewonnen!");
      console.log(`Dag ${name}. Tot de volgende keer`);
      i = 5;
    } else {
        console.log("Dat is niet correct");
        if (i == 4) {
          console.log("Game over");
        }
    }
  }
}
game();
