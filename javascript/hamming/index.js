// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

"use strict"

class Hamming {
  validateAndFormatStrand(strand) {
    if (typeof strand !== 'string') {
      throw 'Invalid Strand Type';
    }

    return strand.toUpperCase();
  }
  validateStrandLengths(firstStrand, secondStrand) {
    if (firstStrand.length !== secondStrand.length) {
      throw 'DNA strands must be of equal length.';
    }
  }
  compute(firstStrand, secondStrand) {
    firstStrand = this.validateAndFormatStrand(firstStrand);
    secondStrand = this.validateAndFormatStrand(secondStrand);

    this.validateStrandLengths(firstStrand, secondStrand);

    // quick equality check
    if (firstStrand === secondStrand) {
      return 0;
    }
    else {
      return this.calculateHammingValue(firstStrand, secondStrand);
    }
  }
  calculateHammingValue(firstStrand, secondStrand) {
    let hammingValue = 0;

    for(let i=0; i < firstStrand.length; i++) {
      if (firstStrand[i] !== secondStrand[i])  {
        hammingValue++;
      }
    }

    return hammingValue;
  }
}

module.exports = Hamming;
