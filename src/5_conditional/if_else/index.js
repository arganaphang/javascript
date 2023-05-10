const role = "ADMIN"; // "ADMIN" | "GUEST"

if (role === "ADMIN") {
  console.log("Allow");
} else {
  console.log("Not Allow");
}

const age = 24; // adult

if (age > 0 && age <= 5) {
  console.log("baby");
} else if (age > 6 && age <= 12) {
  console.log("child");
} else if (age > 13 && age <= 18) {
  console.log("tenage");
} else if (age > 18) {
  console.log("adult");
} else {
  console.log("newborn");
}
