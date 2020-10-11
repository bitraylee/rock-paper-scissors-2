function move(x) {
   var cards = document.getElementById("user-container").getElementsByClassName("card");
   let cardContainer = document.getElementById("user-container").getElementsByClassName("card-container");
   console.log(cards[1].offsetLeft, cards[1].offsetTop);

   for (let i = 0; i < 3; i++) {
      if (i != x) {
         reduceWidth(cards[i]);
         cards[i].innerHTML = "";
         console.log(cards[i].classList);
      }
   }
   //move forward

   moveCardForward(cards[x]);
   cards[x].classList.add("noTransition");
   console.log(cards[x].classList);

   console.log("running");
   console.log(cards[1].offsetLeft, cards[1].offsetTop);

   let computerMove = getMove(x + 1);
   var compCards = document.getElementById("comp-container").getElementsByClassName("card");
   for (let i = 0; i < 3; i++) {
      if (i != computerMove) {
         reduceWidth(compCards[i]);
         compCards[i].innerHTML = "";
         console.log(compCards[i].classList);
      }

   }
   moveCardBackward(compCards[computerMove]);
   setTimeout(() => {
      displayCard(compCards[computerMove], computerMove);
   }, 500);

}

function reduceWidth(card) {
   let i = 0;
   let op = 1;
   var animation = setInterval(() => {
      let width = card.offsetWidth;
      if (width > 0) {
         width -= i;
         card.style.width = width + "px";
         i += 0.5;
         if (width <= i) {
            width = 0;
            card.style.width = width + "px";
         }
         card.style.opacity = op;
         op -= 0.04;
      }
      else {
         clearInterval(animation);
      }
   }, 10);
   card.style.margin = 0;
}

function moveCardForward(card) {
   let i = 20;
   let newOffset = 0;
   var animation = setInterval(() => {
      if (newOffset >= -100) {
         newOffset -= 5;
         card.style.top = newOffset + "px";

      }
      else {
         clearInterval(animation);
      }
   }, 20);
}

function moveCardBackward(card) {
   let i = 20;
   let newOffset = 0;
   var animation = setInterval(() => {
      if (newOffset <= 100) {
         newOffset += 5;
         card.style.top = newOffset + "px";

      }
      else {
         clearInterval(animation);
      }
   }, 20);

}

function displayCard(card, x) {
   let i = 0;

   let new_width = card.offsetWidth;
   var animation = setInterval(() => {
      let width = card.offsetWidth;
      if (width > 0) {
         width -= i;
         card.style.width = width + "px";
         i += 0.5;
         if (width <= i) {
            width = 0;
            card.style.width = width + "px";
         }
      }
      else {
         clearInterval(animation);
         revealCard(card, x, new_width);
         console.log("Working");
      }
   }, 10);
}
function revealCard(card, x, nw) {
   let i = 0;
   let str;
   if (x == 0)
      str = "rock";
   if (x == 1)
      str = "paper";
   if (x == 2)
      str = "scissors";
   card.style.backgroundImage = "url(./images/" + str + ".png)";
   card.style.backgroundSize = "75%";

   width = 0;
   var animation = setInterval(() => {
      if (width < nw) {
         width += i;
         card.style.width = width + "px";
         i += 0.7;
         if (width > nw) {
            width = nw;
            card.style.width = width + "px";
         }
      }
      else {
         clearInterval(animation);
      }
   }, 10);

}
