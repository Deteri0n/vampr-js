class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this; 
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let counter = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      counter++;
      currentVampire = currentVampire.creator;
    }
    return counter;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  
  //WITH THE HELP OF SOREN NISSEN

  closestCommonAncestor(vampire) {
    let vampCreator1 = this;
    let vampCreator2 = vampire;
    let ancestors1 = [];
    let ancestors2 = [];
    //create array of vamp1 ancestors
    while (vampCreator1) {
      ancestors1.push(vampCreator1);
      vampCreator1 = vampCreator1.creator;
    }
    //create array of vamp2 ancestors
    while (vampCreator2) {
      ancestors2.push(vampCreator2);
      vampCreator2 = vampCreator2.creator;
    }
    //compare arrays for first common ancestor
    for (let i = 0; i < ancestors1.length; i++) {
      for (let j = 0; j < ancestors2.length; j++) {
        if (ancestors1[i] === ancestors2[j]) {
          return ancestors2[j]
        }
      }
    }
  }
}

module.exports = Vampire;

