const MAX_LIFE = 100;

class Fighter {
  constructor(
    name,
    strength,
    dexterity,
    weapon = null,
    shield = null,
    potion = null
  ) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    // on rajoute une propriété weapon initialisée à null
    this.weapon = weapon;
    // on rajoute une propriété pour les boucliers
    this.shield = shield;
    // il peut avoir une potion
    this.potion = potion;
  }

  // Lance un combat
  fight(defender) {
    // nombre aléatoire entre 1 et la force MAX du fighter (this.getDamage)
    const attackPoints = Math.floor(Math.random() * this.getDamage() + 1);
    // nombre aléatoire entre 1 et la défense MAX du defender
    const damages = Math.max(attackPoints - defender.getDefence(), 0);

    defender.life = Math.max(defender.life - damages, 0);
  }

  // Permet de déterminer si un combattant est encore en vie
  isAlive() {
    return this.life > 0;
  }
  // méthode showWeapon pour expliquer comment accèder au weapon
  showWeapon() {
    console.log(this.weapon.damage);
  }
  // méthode getDamage
  getDamage() {
    // le fighter a une arme ?
    // Retourne sa force + son arme
    // sinon retourne juste sa force
    return this.weapon ? this.strength + this.weapon.damage : this.strength;
  }
  getDefence() {
    // le fighter a un bouclier ?
    // Retourne sa dextérité + la protection de son bouclier
    // Sinon retourne juste sa dextérité
    return this.shield
      ? this.dexterity + this.shield.protection
      : this.dexterity;
  }
  // méthode permettant de boire une potion pour regagner des points de vie
  drinkPotion() {
    this.life += this.potion.healValue;
    this.potion = null;
  }
}

module.exports = Fighter;
