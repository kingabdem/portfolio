let counter = 0;
let isIncreasing = true; // Variable pour contrôler la direction de l'incrémentation/décrémentation

function autoWrite() {
  let website = document.querySelector(
    ".header-content .content-text .title"
  );
  let text = "Full stack developer";

  if (isIncreasing) {
    website.textContent = text.slice(0, counter);
    counter++;

    if (text.length < counter) {
      isIncreasing = false; // Lorsque le texte est terminé, commencer à décrémenter
    }
  } else {
    counter--;

    website.textContent = text.slice(0, counter);

    if (counter === 1) {
      isIncreasing = true; // Lorsque le texte est complètement décrémenté, recommencer à incrémenter
    }
  }
}

let autofun = setInterval(autoWrite, 100);
