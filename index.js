const readline = require('readline');


let username, password, role;

// Create readline interface in order for the terminal to read this. prompt can't be read by the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function menu() {
  rl.question("Choose an option:\n1. Student\n2. Teacher\n3. Admin\n", (choice) => {
    switch (choice) {
      case "1":
        role = "student";
        login();
        break;
      case "2":
        role = "teacher";
        login();
        break;
      case "3":
        role = "admin";
        login();
        break;
      default:
        console.log("Invalid choice.");
        menu();
        break;
    }
  });
}


function login() {
  rl.question("Enter your username: ", (user) => {
    username = user;
    rl.question("Enter your password: ", (pass) => {
      password = pass;

      if (username === "" || username === null || password === "" || password === null) {
        console.log("Input should not be empty.");
        menu(); 
      } else {
        switch (role) {
          case "admin":
            console.log("Welcome back to the class portal, admin!");
            rl.close();
            break;
          case "teacher":
            console.log("Thank you for logging in, teacher!");
            rl.close();
            break;
          case "student":
            console.log("Welcome to the class portal, student!");
            enterGrades(); 
            break;
          default:
            console.log("Role out of range.");
            menu(); 
            break;
        }
      }
    });
  });
}


function enterGrades() {
  rl.question("Enter grade 1: ", (grade1) => {
    rl.question("Enter grade 2: ", (grade2) => {
      rl.question("Enter grade 3: ", (grade3) => {
        rl.question("Enter grade 4: ", (grade4) => {
          calculateAverage(Number(grade1), Number(grade2), Number(grade3), Number(grade4));
          rl.close();
        });
      });
    });
  });
}


function calculateAverage(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  average = Math.round(average);

  console.log("Hello, student, your average is " + average + ".");

  if (average <= 74) {
    console.log("The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    console.log("The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    console.log("The letter equivalent is A");
  } else if (average > 96) {
    console.log("The letter equivalent is A+");
  }
}


menu();
