
// Example 1

// const superHero = {
//   name: "SpiderMAN",
//   costume: "red",
//   power: "Webs",

//   introduce() {
//     console.log(
//       `I am ${this.name}, my power is to shoot ${this.power}, i never age!`
//     );
//   },
// };

// console.log(superHero);



EXAMPLE 2.

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.titleLength = title.length
    this.getSummary = function() {
        console.log(`The title of this book is ${this.title}, and the author of this book is ${this.author}, in the year ${this.year}.`)

    }
}

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960)

book1.getSummary(book1)

