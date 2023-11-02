// Langkah 1: Membuat array dengan 100 nilai acak antara 1 dan 50
const randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 50) + 1);
}

// Langkah 2: Membagi array menjadi dua array berdasarkan indeksnya
const evenArray = [];
const oddArray = [];

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(randomArray[i]);
  } else {
    oddArray.push(randomArray[i]);
  }
}

// Langkah 3: Menghitung statistik untuk kedua array
const getStatistics = (array) => {
  const statistics = {
    count: array.length,
    values: array,
  };
  return statistics;
};

const evenArrayStats = getStatistics(evenArray);
const oddArrayStats = getStatistics(oddArray);

console.log('Array Genap:', evenArray);
console.log('Array Ganjil:', oddArray);
console.log('Statistik Array Genap:', evenArrayStats);
console.log('Statistik Array Ganjil:', oddArrayStats);
