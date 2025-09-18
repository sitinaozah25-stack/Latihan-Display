const readln = require('readline');
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require('fs');

//membuat folder data
const dirpath = './data';
if (!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
}

//membuat file contacts.json jika belum ada
const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)) {
    fs.writeFileSync(datapath, '[]', 'utf-8');
}

rl.question('Masukan Nama Anda : ', (nama) => {
    rl.question('Masukan No Hp : ', (nohp) => {
        //console.log(Terima Kasih ${nama}, sudah input ${nohp});
        const contact = { nama: nama, nohp: nohp };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        //console.log(contacts);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Nuhunnya atos mampir');
        rl.close();
    });
});
