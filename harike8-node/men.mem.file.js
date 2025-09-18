const { error } = require('console');
const fs = require('fs');

// Menuliskan string ke file (Sync)
try {
    fs.writeFileSync('data/test.txt', 'Hello Shync');
} catch (e) {
    console.log(e);
}

// Menuliskan string ke file (Async)
fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (err) => {
    if (err) console.log(err);
});

// Membaca isi file (Sync)
const data = fs.readFileSync('data/test.txt');
console.log(data.toString());

// atau dengan encoding langsung
const data1 = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data1);
