

function buyChocolate() {
    let name = prompt("What is your name?");
    let country = prompt("What country do you reside?");
    let brand = prompt(
      "What brand of hot chocolate is available in your area?"
    );
    let temp = prompt("What is the present temperature of your area in °C?");

    if (temp < 13) {
      alert(
        `Thank you ${name}. Kindly get a cup of ${brand}
          hot chocolate for yourself 😀 `
      );
    } else {
      alert(
        `Thank you ${name}. You don't need to take a cup of ${brand} hot chocolate 👋`
      );
    }
  }

  function changeTheme () {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark")
  } else {
    body.classList.add("dark")
  }
  }


  let themeButton = document.querySelector(".theme-button");

  themeButton.addEventListener("click", changeTheme)

  let buyButton = document.querySelector(".btn");
  buyButton.addEventListener("click", buyChocolate);
