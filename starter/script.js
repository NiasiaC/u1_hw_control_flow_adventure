let name = prompt("What is your name?");
alert("Hello, " + name + "!");
{
  console.log(prompt);
}

let exoticTravel = prompt(
  "Lets take a trip through the 7 continents, you think you have what it takes for an adventure?"
);
alert("Well come on then, grab your passport");

const friedEggs = prompt("Do you like green eggs and ham lol, just kidding");

let text;
let favLocation = prompt(
  "Whats Continent would you like to start with Africa, South America or Europe?"
);
switch (favLocation) {
  case "Africa":
    text = "Excellent choice! Africa is good for your soul.";
    break;
  case "South America":
    text = "South America is my favorite too!";
    break;
  case "Europe":
    text = "Really? Are you sure the Europe should be first?";
    break;
  default:
    text = "I have never heard of that one!";
}
