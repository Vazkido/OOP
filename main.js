
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



// EXAMPLE 2. (CONSTRUCTORS)

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//     this.titleLength = title.length
//     this.getSummary = function() {
//         console.log(`The title of this book is ${this.title}, and the author of this book is ${this.author}, in the year ${this.year}.`)

//     }
// }

// let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960)

// book1.getSummary(book1)


// EXAMPLE 3 (CLASS)

// class Book{
//     constructor (author, title, year) { // constructor funtion to intialize properties
//         this.title = title
//         this.author = author
//         this.year = year
//         this.titleLength = title.length
//     }
//     getSummary() {
//     console.log(`${this.title} was written by ${this.author} in the year ${this.year}`)    
//     }
// }

// let book1 = new Book("To kill a Mockng", "Harper Lee", 1960)

// console.log(book1.year);
// book1.updateYear = 9000
// console.log(book1.year);
// book1.title="ppgirls"


//TALKING ABOUT INHERITANCE

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks loudly`)
    }
}

let boosky = new Dog("boosky")

boosky.speak()
boosky.bark()



// class Animal {
//   constructor(name, breed, age) {
//     super(name) = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} barks loudly`);
//   }
// }

// let boosky = new Dog("boosky, Lhasa, 3");

// boosky.speak();
// boosky.bark();