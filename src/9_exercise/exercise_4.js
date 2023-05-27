/* Todo List
 - Create Todo
 - List Todo

 model:
 - id -> number/string
 - title -> string
 - created_at -> datetime (string)
 */

// ? START LOGIC HERE
let DATABASE = []; // array of object

function create(title) {
  // ? get current time
  const now = new Date();
  // ? create new todo json
  const newTodo = {
    id: now.getTime(), // 1685160553260
    title: title,
    created_at: now.toString(), // "Sat May 27 2023 11:09:13 GMT+0700 (Western Indonesia Time)"
  };
  // ? insert into database
  DATABASE.push(newTodo);
  // ? return new todo data
  return newTodo;
}

// return array of object
function list() {
  // ? return all of todo data
  return DATABASE;
}

function printTodos() {
  console.log(
    "========================================TODOS========================================\n\n"
  );
  console.log(`ID\t\t| Title\t\t\t| Created At`);
  console.log(
    `====================================================================================================`
  );
  list().map(function (todo) {
    console.log(`${todo.id} \t| ${todo.title} \t| ${todo.created_at}`);
  });
}
// ? END LOGIC HERE

// ? START APPLICATION
create("Buy Gundam HG");
create("Learn Frontend");
printTodos();
// ? END APPLICATION HERE
