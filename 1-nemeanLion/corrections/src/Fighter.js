/* Fighter class definition */
const MAX_LIFE = 100;

// on crée une classe fighter avec 4 propriétés : name, str, dext
// et par défaut la vie sera à MAX_LIFE (donc 100)
class Fighter {
  constructor(name, strength, dexterity, life = MAX_LIFE) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = life;
  }
  // crée la méthode fight
  fight(enemy) {
    // le code de ma fonction fight
    // calcule l'attaque du fighter
    // nombre aléatoire entre 1 et la force du fighter (this.strength)
    const attack = Math.floor(Math.random() * this.strength + 1);
    // console.log(attack);

    // déduire la défense de l'ennemi. Le nombre de dommages ne peut pas être négatif
    const damage = attack - enemy.dexterity > 0 ? attack - enemy.dexterity : 0; // ternaire
    // if (attack - enemy.dexterity > 0){ // if mode
    //     damage = attack.enemy.dexterity;
    // }
    // else{
    //     damage = 0;
    // }

    // diminue les points de vie de l'ennemi en fonction des dommages calculés

    // les points de vie ne peuvent pas tomber en dessous de 0
    enemy.life = enemy.life - damage >= 0 ? enemy.life - damage : 0; // ternaire
    // if (enemy.life - damage >= 0) { // if mode
    //   enemy.life -= damage; // enemy.life = enemy.life - damage
    // } else {
    //   enemy.life = 0;
    // }
  }

  // méthode isAlive
  // cette méthode ne prend pas de paramètre et elle va renvoyer true si le combattant
  // a encore des points de vie et false s'il est mort
  isAlive() {
    return this.life > 0 ? true : false;
    // if (this.life > 0){
    //   return true
    // }
    // else{
    //   return false;
    // }
  }
}

export default Fighter;
