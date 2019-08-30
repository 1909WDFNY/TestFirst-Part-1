/* eslint-disable no-unused-vars, no-throw-literal*/

const Pokemon = function(name, hp, atkBonus) {
    this.name = name;
    this.health = hp;
    this.attackBonus = atkBonus;
};

Pokemon.prototype.biteAttack = function() {
    return this.attackBonus + 2;    
};

Pokemon.prototype.isDefeated = function() {
    return this.health <= 0;
};

//using recursion to continue the battle until one pokemon reaches 0 HP
const simulateBattle = (pokemon1, pokemon2, firstAttacker) => {
    let attacker = (firstAttacker === pokemon1.name) ? pokemon1 : pokemon2;
    let opponent = (firstAttacker === pokemon1.name) ? pokemon2 : pokemon1;
    
    if (attacker.isDefeated()) return `${opponent.name} Wins!`;
    opponent.health -= attacker.biteAttack();
    if (opponent.isDefeated()) return `${attacker.name} Wins!`;
    attacker.health -= opponent.biteAttack();
    return simulateBattle(attacker, opponent, firstAttacker);
};
