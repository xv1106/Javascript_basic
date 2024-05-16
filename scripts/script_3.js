let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
etages = parseInt(etages, 10);

for (let i = 1; i <= etages; i++) {
    let etage = ' '.repeat(etages - i) + '#'.repeat(i);
    console.log(etage);
}
