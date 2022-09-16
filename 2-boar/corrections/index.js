import Fighter from "./src/Fighter.js";
// importer weapon
import Weapon from "./src/Weapon.js";
// importer le bouclier
import Shield from "./src/Shield.js";
//importer la potion
import Potion from "./src/Potion.js";
// importe la fonction qui affiche le duel
import fullDuel from "./src/fight.js";

/** Création d'Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Création de l'adversaire  */
const lion = new Fighter("🦁 The Nemean Lion", 11, 13);

fullDuel(heracles, lion);

// Héraclès, épuisé de son combat, trouve un coin d'herbe, mange une petite raclette
// et fait une nuit de 11 heures. Il est requinqué grace à sa potion d'Antadys.
const potionAntadys = new Potion("Potion d'Antadys", 50);
heracles.potion = potionAntadys;
heracles.drinkPotion();

console.log("Vie après avoir bu la potion : " + heracles.life);

// permet de faire une pause
console.log("Press any key to continue.");
process.stdin.once("data", () => {
  // On instancie une épée
  // Vu que le damage d'un weapon est 10 par défaut, je n'ai pas
  // besoin de préciser
  const sword = new Weapon("Epée");
  // pour initialiser une potentielle super branche
  const branch = new Weapon("Branche magique", 10);

  // Combat contre le cochon
  heracles.weapon = branch;
  // déclarer le nouveau bouclier
  const bouclier = new Shield("Bouclier d'Alductor", 10);
  heracles.shield = bouclier;

  // crée le sanglier
  const boar = new Fighter("Boar of Erymanthe", 20, 23);

  fullDuel(heracles, boar);
});
