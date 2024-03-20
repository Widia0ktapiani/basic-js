//LOOPING

/**STUDY CASE 1
 * 
 * TAMPILKAN 10 BILANGAN GANJIL DAN GENAP PERTAMA
 */

// var num = 10;

// for(var i = 1; i <= num; i++){
//     if (i % 2 == 0) {
//         console.log(i + " adalah genap")   
//     } else{
//         console.log(i + " adalah ganjil")
//     }
// }


/**STUDY CASE 2
 * 
 * tentukan jumlah faktor dari sebuah bilangan
 */
var jumlahFaktor = 0;
var angka = 13;

for(var i = 1; i <= angka; i++){
    if (angka % i === 0) {
        jumlahFaktor++
        
    }
}
console.log(jumlahFaktor)



/**STUDY CASE 3
 * 
 * CEK BILANGAN PRIMA
 */

if (jumlahFaktor === 2) {
    console.log("bilangan prima")
    
} else {
    console.log("bukan bilangan prima")
}


