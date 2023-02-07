// let nama = ['hafif', 'dayat', 'wandi']
// let Nama = ['yusuf', 'luthfi', 'tompel']

// let namaSantri = nama.concat(Nama)
// console.log(namaSantri);


// mean
// let nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];

// let jumlahNilai =0;
// for (i in nilaiSantri) {
//     jumlahNilai += nilaiSantri[i];
// }
// let rataRata = jumlahNilai / nilaiSantri.length;
// alert('rata-rata nilai adalah' + rataRata.toFixed(2));


// median
// let nilaiSiswa = [5, 9, 6, 7, 9, 8, 10, 7, 8];

// let nilai = [5, 6, 7, 7, 8, 8, 9, 9, 10 ];
// let n=9;
// let hasil =n / 2

// let m = hasil.toFixed();
// // alert('' + m)
// let median = nilai[m];
// alert(median);

// var nilaiSiswa = [5, 9, 6, 7, 9, 8, 10, 7, 8];

// nilaiSiswa.sort (function(a , b) {
//     return a-b;
// })
// console.log(nilaiSiswa);

// var nilaiSantri
// console.log(nilaiSiswa[4]); 

// let nilaiManusia = [5, 9, 6, 7, 9, 8, 10, 7, 8];

// let orang = nilaiManusia.sort(function(a , b) {
//     return a-b;
// }) 

// console.log(nilaiManusia);

// let hasil = orang.splice(2,6);

// console.log(hasil)                                                                                                                                                           

// simpangan baku

let nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];
const nilaiRataRata = nilaiSantri.reduce((sum, current) => sum + current, 0) / nilaiSantri.length;
console.log(nilaiRataRata);
//membulatkan hasil nilai
const hasilNilaiRata = nilaiRataRata.toFixed()

//mencari varian pada data
data = nilaiSantri.map( (k)=>{return ((k - hasilNilaiRata))**2})

const sum = data.reduce((acc, cur)=> acc + cur,0)

const varians = sum / nilaiSantri.length
const varian = varians.toFixed()
//mengkuadratkan dari hasil varian
const penghitunganSB = (varians) => {
    return Math.sqrt(varians);
};

const simpanganBaku = penghitunganSB(varians).toFixed(2);

document.write(`nilai rata-rata : ${hasilNilaiRata} </br> nilai varian : ${varian} </br> simpangan baku : ${simpanganBaku}`)