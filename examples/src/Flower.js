/**
  * noun
  * 1. the seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) 
  * that are typically surrounded by a brightly coloured corolla (petals) and a green calyx (sepals).
  * <b>Synonyms:</b> bloom, blossom, floweret, floret
  * 
  * 2. the finest individuals out of a number of people or things.
  * <i>"he wasted the flower of French youth on his dreams of empire"</i>
  * <b>Synonyms:</b> best, finest, top, pick, choice, choicest, prime, cream
  * @class
*/

export class Flower {
  /**
   * @param {string} name name of the flower
   * @param {string} color color of the flower
   * @param {number} petals number of the petals
   */
  constructor({
    name,
    color,
    petals,
  } = {}) {
    this.name = name;
    this.color = color;
    this.petals = petals;
  }

  /**
   * produce flowers; be in flower
   * @method
   * @example
   * // returns '🌹'
   * flower.bloom();
   */

  bloom = () => '🌹';

  /**
   * (of a plant, leaf, or flower) become limp through heat, loss of water, or disease; droop
   * @method
   * @example
   * // returns '🥀'
   * flower.wilt();
   */

  wilt = () => '🥀';
}
