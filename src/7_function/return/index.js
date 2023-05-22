function greeting(name, age, gender, address) {
  // early return
  if (age <= 17) {
    return "you are still a kid";
  }
  return `Hello ${name}, address ${address}, gender ${gender}, age ${age}`;
}

const john = greeting("John Doe", 25, "male", "Indonesia");
const camelia = greeting("Camelia", 12, "female", "England");
console.log(john);
console.log(camelia);
