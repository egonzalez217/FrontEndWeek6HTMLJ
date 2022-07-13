class Deck {
  constructor() {
    this.cards = [
      { value: 2, cardName: "Two of Hearts" },
      { value: 3, cardName: "Three of Hearts" },
      { value: 4, cardName: "Four of Hearts" },
      { value: 5, cardName: "Five of Hearts" },
      { value: 6, cardName: "Six of Hearts" },
      { value: 7, cardName: "Seven of Hearts" },
      { value: 8, cardName: "Eight of Hearts" },
      { value: 9, cardName: "Nine of Hearts" },
      { value: 10, cardName: "Ten of Hearts" },
      { value: 11, cardName: "Jack of Hearts" },
      { value: 12, cardName: "Queen of Hearts" },
      { value: 13, cardName: "King Hearts" },
      { value: 14, cardName: "Ace of Hearts" },
      { value: 15, cardName: "Two of Spades" },
      { value: 16, cardName: "Three of Spades" },
      { value: 17, cardName: "Four of Spades" },
      { value: 18, cardName: "Five of Spades" },
      { value: 19, cardName: "Six of Spades" },
      { value: 20, cardName: "Seven of Spades" },
      { value: 21, cardName: "Eight of Spades" },
      { value: 22, cardName: "Nine of Spades" },
      { value: 23, cardName: "Ten of Spades" },
      { value: 24, cardName: "Jack of Spades" },
      { value: 25, cardName: "Queen of Spades" },
      { value: 26, cardName: "King of Spades" },
      { value: 27, cardName: "Ace of Spades" },
      { value: 28, cardName: "Two of Diamonds" },
      { value: 29, cardName: "Three of Diamonds" },
      { value: 30, cardName: "Four of Diamonds" },
      { value: 31, cardName: "Five of Diamonds" },
      { value: 32, cardName: "Six of Diamonds" },
      { value: 33, cardName: "Seven of Diamonds" },
      { value: 34, cardName: "Eight of Diamonds" },
      { value: 35, cardName: "Nine of Diamonds" },
      { value: 36, cardName: "Ten of Diamonds" },
      { value: 37, cardName: "Jack Diamonds" },
      { value: 38, cardName: "Queen of Diamonds" },
      { value: 39, cardName: "King of Diamonds" },
      { value: 40, cardName: "Ace of Diamonds" },
      { value: 41, cardName: "Two of Clubs" },
      { value: 42, cardName: "Three of Clubs" },
      { value: 43, cardName: "Four of Clubs" },
      { value: 44, cardName: "Five of Clubs" },
      { value: 45, cardName: "Six of Clubs" },
      { value: 46, cardName: "Seven of Clubs" },
      { value: 47, cardName: "Eight of Clubs" },
      { value: 48, cardName: "Nine of Clubs" },
      { value: 49, cardName: "Ten of Clubs" },
      { value: 50, cardName: "Jack of Clubs" },
      { value: 51, cardName: "Queen of Clubs" },
      { value: 52, cardName: "King of Clubs" },
      { value: 53, cardName: "Ace of Clubs" },
    ];
  }

  draw() {
    return this.cards.shift(0);
  }

  shuffle() {
    let currentIndex = this.cards.length,
      randomIndex;

    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // swap it with the current element.
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex],
      ];
    }

    return this.cards;
  }
}

class Player {
  constructor(playerName) {
    this.hand = [];
    this.playerName = playerName;
    this.score = 0;
  }

  draw() {
    return this.hand.shift(0);
  }

  incrementScore() {
    this.score++;
  }
}

console.log("New game of War! Getting a deck of cards for our players");

let newDeck = new Deck();
let emilio = new Player();
let masterChief = new Player();

//shuffle deck so it's not in numerical order of card value
newDeck.shuffle();
console.log("New Deck has been shuffled");

console.log("Starting cards in newDeck: " + Object.keys(newDeck.cards).length);

console.log(
  "Distributing cards amongst players:  " +
    Object.keys({ emilio })[0] +
    " and " +
    Object.keys({ masterChief })[0]
);

//DISTRIBUTE THE CARDS OF THE DECK TO EACH PLAYERS HAND until there are no cards remaining accordin got condiition inside while loop
while (Object.keys(newDeck.cards).length != 0) {
  emilio.hand.push(newDeck.draw());
  masterChief.hand.push(newDeck.draw());
}
console.log("Emilio's hand: " + JSON.stringify(emilio.hand, null, 2));
console.log("MasterChief's hand: " + JSON.stringify(masterChief.hand, null, 2));

console.log("Remaining cards in newDeck: " + Object.keys(newDeck.cards).length);

console.log("Number of cards emilio has: " + Object.keys(emilio.hand).length);
console.log(
  "Number of cards masterChief has: " + Object.keys(masterChief.hand).length
);
//play war; whoever has the higher value card gets a point until there are no more cards left to play

console.log("Game of war begins...");

//While loop, each iteration a card is drawn from each players hand and from there will be checked who has the greater value, whoever has the greater card value gains a point, if draw then both players scores increment
while (
  Object.keys(emilio.hand).length > 0 &&
  Object.keys(masterChief.hand).length > 0
) {
  let emilioCard = emilio.draw();
  let masterChiefCard = masterChief.draw();

  console.log("Emilio's card value: " + emilioCard.value);
  console.log("Master Chief's card value: " + masterChiefCard.value);

  if (emilioCard.value > masterChiefCard.value) {
    emilio.incrementScore();
    console.log("Emilio won the round");
  } else if (masterChiefCard.value > emilioCard.value) {
    masterChief.incrementScore();
    console.log("MasterChief won the round");
  } else {
    emilio.incrementScore();
    masterChief.incrementScore();
    console.log("Tie scoring round.");
  }
}

//assign player score to variable
let emilioScore = emilio.score;
let masterChiefScore = masterChief.score;

//display player score to the console
console.log("Emilio's score: " + emilioScore);
console.log("MasterChief's score: " + masterChiefScore);

//decide who won based off of each players score, or print if there was a tie
if (emilioScore > masterChiefScore) {
  console.log("Emilio won the game!");
} else if (emilioScore < masterChiefScore) {
  console.log("Master Chief won the game!");
} else {
  console.log("Tie game! What are the odds...");
}
