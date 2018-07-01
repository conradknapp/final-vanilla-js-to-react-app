import Form from "./Form";

class App {
  constructor() {
    this.cards = [];
    this.addCard = this.addCard.bind(this);
  }
  addCard(data) {
    this.cards = [data, ...this.cards];
    console.log(this.cards);
  }
}

const app = new App();
const form = new Form(app.addCard);
