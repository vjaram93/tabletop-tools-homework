/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  // TODO
  if (isSpellPrepared) {
    console.log("Spell is casted.");
    return true;
  } else if (hasScroll) {
    console.log("Spell is casted.");
    return true;
  } else {
    console.log("Spell is not prepared.");
    return false;
  }
}

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  // TODO
  if (aware) {
    console.log("You have been spotted.");
    return false;
  } else if (hiding) {
    console.log("You are hidden.");
    return true;
  } else {
    console.log("You are not hiding.");
    return false;
  }
}

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  // TODO
  if (attack >= ac) {
    console.log("You hit!");
    return true;
  } else if (attack < ac) {
    console.log("You missed.");
    return false;
  }
}

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  // TODO
  const CRIT_THRESHOLD = 10;
  if (attack >= CRIT_THRESHOLD + ac) {
    console.log("You crit!");
    return true;
  } else {
    console.log("No crit.");
    return false;
  }
}

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  // TODO
  let healedHP = Math.min(currentHp + healAmount, maxHp);
  return `You healed to ${healedHP} HP.`;
  // return Math.min(currentHp + healAmount, maxHp); <-- returns just the number. :)
}

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  // TODO
  const UNTRAINED_BONUS = 0;
  const TRAINED_BONUS = 2;
  const EXPERT_BONUS = 4;
  const MASTER_BONUS = 6;
  const LEGENDARY_BONUS = 8;

  if (rank === "untrained") {
    return level + UNTRAINED_BONUS;
  } else if (rank === "trained") {
    return level + TRAINED_BONUS;
  } else if (rank === "expert") {
    return level + EXPERT_BONUS;
  } else if (rank === "master") {
    return level + MASTER_BONUS;
  } else if (rank === "legendary") {
    return level + LEGENDARY_BONUS;
  }
}

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  // TODO
  if (takingCover) {
    console.log("+4 to AC");
    return 4;
  } else if (behindObstacle) {
    console.log("+2 to AC");
    return 2;
  } else {
    console.log("No bonus to AC");
    return 0;
  }
}

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  // TODO
  let doubleHp = maxHp * 2;

  if (damage >= doubleHp) {
    return -1;
  } else if (currentHp - damage < 0 && damage < doubleHp) {
    return 0;
  } else {
    return currentHp - damage;
  }
}

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  // TODO
  if (light === "bright") {
    return true;
  } else if (light === "dim" && vision === "average") {
    return false;
  } else if (
    (light === "dim" && vision === "low-light") ||
    vision === "darkvision"
  ) {
    return true;
  } else if (
    (light === "dark" && vision === "average") ||
    vision === "low-light"
  ) {
    return false;
  } else if (light === "dark" && vision === "darkvision") {
    return true;
  }
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  // TODO
  const CRIT_THRESHOLD = 10;
  let critDamage = damage * 2;

  if (attack < ac) {
    console.log("No damage is dealt.");
    return 0;
  } else if (attack >= CRIT_THRESHOLD + ac) {
    console.log("Critical Hit!");
    return critDamage;
  } else if (attack > ac) {
    return damage;
  }
}
