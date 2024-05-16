function factorielle(n) {
  if (n === 0) {
      return 1;
  }
  return n * factorielle(n - 1);
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
let resultat = factorielle(parseInt(nombre, 10));
console.log(`Le résultat est : ${resultat}`);
