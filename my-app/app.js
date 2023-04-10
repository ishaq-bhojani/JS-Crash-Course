let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  let stringy = JSON.stringify(person);

  localStorage.setItem("person1", stringy);

  console.log(stringy);