const user = {
  id: 1,
  name: "John",
  age: 25,
};

function myLocalStorage(user) {
  const userJson = JSON.stringify(user);

  localStorage.setItem("user", userJson);
}

myLocalStorage(user);



