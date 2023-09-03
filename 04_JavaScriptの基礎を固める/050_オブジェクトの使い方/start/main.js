const person = {
  name: ['Takada', 'Kenshi'],
  age: 37,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'classic'
  },
  getFullName: function () {
    console.log(this.name[0] + this.name[1])
  }
};

const ageKey = 'age';
person[ageKey] = 19;
console.log(person.age);
person.getFullName();

const s = 'hello world';
s.toUpperCase();
