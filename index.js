// Write your classes here
class Tree{
  constructor(species){
    this.species=species;
  }
  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}
class Deciduous extends Tree{
  constructor(species,name){
    super(species);
    this.name=name;
  }
  static definition(){
<<<<<<< HEAD
    return super.definition()+' Deciduous trees shed their leaves annually.'
=======
    super(definition)
>>>>>>> bcc8be26a922c355ecfb8e06552c6daa138c4d8a
  }
}
class Evergreen extends Tree{
  constructor(species,name){
    super(species);
    this.name=name;
  }
  static definition(){
<<<<<<< HEAD
    return super.definition()+' Evergreens keep their leaves all year round.'
=======
    super(definition())
>>>>>>> bcc8be26a922c355ecfb8e06552c6daa138c4d8a
  }
}
