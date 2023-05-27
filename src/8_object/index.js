const john = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  email: "johndoe@mail.com",
  age: 35,
  country: "Indonesia",
  child: [
    {
      name: "Carla",
      gender: "female", // 2 "female" | "male"
    },
    {
      name: "Lucas",
      gender: "male",
    },
  ],
};
const { name, email, country } = john; // deconstruction
// const name = john.name;
// const email = john.email;
// const country = john.country;
console.log(name, email, country);
