// Write your classes here
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      const parentDef = super.definition();
      return `${parentDef} Deciduous trees shed their leaves annually.`;
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      const parentDef = super.definition();
      return `${parentDef} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Testing the classes
  const oak = new Deciduous("Deciduous", "Oak");
  const pine = new Evergreen("Evergreen", "Pine");
  
  console.log(Tree.definition());
  console.log(Deciduous.definition());
  console.log(Evergreen.definition());
  