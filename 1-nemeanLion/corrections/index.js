// importer la classe
import Fighter from "./src/Fighter.js";

// First Labour : Heracles vs Nemean Lion

const heracles = new Fighter("🧔 Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);

// console.log(heracles);
// console.log(lion);

// teste l'étape
// heracles attaque le lion
// heracles.fight(lion);
// // le lion attaque héracles
// lion.fight(heracles);

// compter le nombre de rounds
let i = 1;
// une boucle qui va répéter chaque round tant que héracles ou le lion sont vivants
while (heracles.isAlive() && lion.isAlive()) {
  // affiche le round
  console.log("Round #" + i);
  // step 1 : heracles attaque
  heracles.fight(lion);
  console.log(
    "Héraclès 🧔 attaque le lion 🦁. Points de vie restants du lion : " +
      lion.life +
      " ❤️"
  );
  // step 2 : le lion attaque
  lion.fight(heracles);
  console.log(
    "Le lion 🦁 attaque Héraclès 🧔. Points de vie restants d'Héraclès : " +
      heracles.life +
      " ❤️"
  );
  i++;
}

if (!heracles.isAlive()) {
  // héraclès est mort
  console.log(`🏆 Lion 🦁 (${lion.life} ❤️ )
💀 Héracles`);
} else {
  console.log(`🏆 Héraclès 🧔 (${heracles.life} ❤️ )
💀 Lion 🦁`);
}
