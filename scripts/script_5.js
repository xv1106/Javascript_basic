const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 1. Est-ce que tous les livres ont été au moins empruntés une fois ?
let allRented = books.every(book => book.rented > 0);
console.log("Tous les livres ont été empruntés au moins une fois :", allRented);

// 2. Quel est le livre le plus emprunté ?
let mostRented = books.reduce((max, book) => book.rented > max.rented ? book : max);
console.log("Livre le plus emprunté :", mostRented);

// 3. Quel est le livre le moins emprunté ?
let leastRented = books.reduce((min, book) => book.rented < min.rented ? book : min);
console.log("Livre le moins emprunté :", leastRented);

// 4. Trouve le livre avec l'ID: 873495
let bookById = books.find(book => book.id === 873495);
console.log("Livre avec l'ID 873495 :", bookById);

// 5. Supprime le livre avec l'ID: 133712
let booksWithoutSpecific = books.filter(book => book.id !== 133712);
console.log("Liste des livres sans celui avec l'ID 133712 :", booksWithoutSpecific);

// 6. Trie les livres par ordre alphabétique (sans celui avec l'ID 133712)
let sortedBooks = booksWithoutSpecific.sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", sortedBooks);
