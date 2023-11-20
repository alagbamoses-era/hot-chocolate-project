


function buyChocolate() {
    let name = prompt("What is your name?");
    let country = prompt("What country do you reside?");
    let brand = prompt(
      "What brand of hot chocolate is available in your area?"
    );
    let temp = prompt("What is the present temperature of your area?");

    if (temp < 9) {
      alert(
        `Thank you ${name}. You need to take a cup of ${brand}
          hot chocolate`
      );
    } else {
      alert(
        `Thank you ${name}. You don't need to take a cup of ${brand} hot chocolate`
      );
    }
  }
  let buyButton = document.querySelector(".btn");
  buyButton.addEventListener("click", buyChocolate);
