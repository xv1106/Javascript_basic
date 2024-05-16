function arnToProtein(arn) {
  // Table de correspondance entre les codons et les acides aminés
  const codonToAminoAcid = {
      'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine',
      'AGU': 'Sérine', 'AGC': 'Sérine', 'CCU': 'Proline', 'CCC': 'Proline',
      'CCA': 'Proline', 'CCG': 'Proline', 'UUA': 'Leucine', 'UUG': 'Leucine',
      'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine', 'CGU': 'Arginine',
      'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine',
      'AGA': 'Arginine', 'AGG': 'Arginine', 'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
  };

  // Initialiser un tableau vide pour stocker les acides aminés
  let proteinArray = [];

  // Parcourir l'ARN par pas de 3 pour obtenir chaque codon
  for (let i = 0; i < arn.length; i += 3) {
      const codon = arn.slice(i, i + 3);
      // Vérifier si le codon existe dans la table de correspondance
      if (codonToAminoAcid[codon]) {
          // Traduire le codon en acide aminé et l'ajouter au tableau de protéines
          proteinArray.push(codonToAminoAcid[codon]);
      } else {
          // Si le codon n'est pas trouvé, retourner une erreur
          return "Codon invalide: " + codon;
      }
  }

  // Retourner la chaîne de protéines en séparant les acides aminés par '-'
  return proteinArray.join('-');
}

// Tests avec les ARN fournis
console.log(arnToP