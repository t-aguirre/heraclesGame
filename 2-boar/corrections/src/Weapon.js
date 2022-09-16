class Weapon {
  // la classe Weapon a deux propriétés : name et damage
  constructor(name, damage = 10) {
    this.name = name;
    this.damage = damage;
  }
}

//exporte la classe
export default Weapon;
