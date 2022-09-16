// mettre toutes les lignes de code qui concernent le combat
function fullDuel(fighter1, fighter2) {
  console.log(fighter1, fighter2);
  // compter le nombre de rounds
  let i = 1;
  // une boucle qui va répéter chaque round tant que héracles ou le lion sont vivants
  while (fighter1.isAlive() && fighter2.isAlive()) {
    // affiche le round
    console.log("Round #" + i);
    // step 1 : fighter1 attaque
    fighter1.fight(fighter2);
    console.log(
      `${fighter1.name} attaque ${fighter2.name} . Points de vie restants ${fighter2.name}  : ` +
        fighter2.life +
        " ❤️"
    );
    // step 2 : le fighter2 attaque
    fighter2.fight(fighter1);
    console.log(
      `${fighter2.name} attaque ${fighter1.name} . Points de vie restants ${fighter1.name}  : ` +
        fighter1.life +
        " ❤️"
    );
    i++;
  }

  if (!fighter1.isAlive()) {
    // fighter1 est mort
    console.log(`🏆 ${fighter2.name} (${fighter2.life} ❤️ )
💀 ${fighter1.name}`);
  } else {
    console.log(`🏆 ${fighter1.name} (${fighter1.life} ❤️ )
💀 ${fighter2.name}`);
  }
}

module.exports = fullDuel;
