//FUNCTION

// function hello() {
//     console.log("haloo, celamat pagiiw");  
// }

// // invoke function
// hello();
// //hasil : haloo, celamat pagiiw



// function cek(angka) {
//     if (angka % 2 == 0) {
//         console.log (" bilangan genap");
        
//     } else {
//         console.log (" bilangan ganjil");
//     }
// }

// cek(5);


/**STUDY CASE 1
 * MENGUBAH KALIMAT MENJADI LARIK
 * Menghitung jumlah Kata
 */

// function splitToArray(str){
//     var tempArray = str.split(" ");
//     return tempArray;
// }
// function jumlahKata(kalimat) {
//     var result = splitToArray(kalimat);
//     var arrayLength = result.length;
//     return arrayLength;
// }

// console.log (jumlahKata("Hello Selamat Pagi"));


/**STUDY CASE 2
 * 
 * buatlah sebuah function untuk cek jumlah faktor dari sebuah angka.
 * 
 * contuh:
 * cekJumlahFaktor(12)
 * 
 * result:
 * 6
 */

// function cekJumlahFaktor(num) {
//     var Faktor= 0;
//     for(i = 0; i <= num; i++){
//         if (num % i === 0) {
//             Faktor++;  
//         }
//     } 
//     return Faktor;
    
// } 
// console.log (cekJumlahFaktor(5));

/**STUDY CASE 3
 * 
 * buatlah sebuah function bilangan prima atau tidak.
 * 
 * contuh:
 * cekBilanganPrima(19)
 * 
 * result:
 * Bilangan Prima
 */

// function cekBilanganPrima(num) {
//     var jumlahFaktor = cekJumlahFaktor(num);
//     if (jumlahFaktor === 2) {
//         return "Bilangan Prima";
        
//     } else {
//         return "Bukan Bilangan Prima";
//     }
// } 
// console.log(cekBilanganPrima(5)); // dilihat jumlah faktorialnya apakah sama dengan 2


/**STUDY CASE 4
 * 
 * buatlah sebuah function untuk memecah sebuah kalimat menjadi perkata.
 * 
 * contuh:
 * pecahKalimat("buka puasa bersama teman kuliah")
 * 
 * result:
 * ["buku","puasa","bersama","teman","kuliah"]
 */

//cara 1
// function splitToArray(str){
//     var tempArray = str.split(" ");
//     return tempArray;
//  }

// function pecahKalimat(kalimat) {
//     var result = splitToArray(kalimat);
//     return result;
// }
// console.log (pecahKalimat("buka bersama teman kuliah"));

//cara 2
// function pecahKalimat(str) {
//     var arrResult = []
//     var temp = ""

//     for (i = 0; i < str.length; i++){
//         if(str[i] !== " ") {
//             //console.log(str[i]);
//             temp += str[i];
//         } else {
//             arrResult.push(temp);
//             temp = "";
//         }
//         if (i == str.length - 1) {
//             arrResult.push(temp);
//             temp = "";
            
//         }
//     }
//   console.log(arrResult);  
// }
// pecahKalimat("buka puasa bersama teman kuliah")


/**STUDY CASE 5
 * 
 * buatlah sebuah function untuk menghitung rata2.
 * 
 * contuh:
 * countAverage([1,2,3,4,5])
 * 
 * result:
 * Avarage = 3.00
 */

// function countAverage(numbers) {
//     var sum = 0;
//     for ( i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return (sum / numbers.length).toFixed(2);
// }
// console.log (countAverage([1,2,3,4,5]))


/**STUDY CASE 6
 * 
 * buatlah sebuah function apakah karakter 'x' sama dengan '0'
 * 
 * contuh:
 * countXo('xoxoxoxoxoxo')
 * 
 * result:
 * true
 */

function countXO(str) {
   var countX = 0;
    var countO = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === "x") {
            countX++;  
        } else if (str[i] === "o") {
            countO++;
            
        }
    }
    
    if (countX === countO) {
        return true;
        
    } else {
        return false;
        
    }
    
}
console.log(countXO('xxxooo'));

function countXO(str) {
    var countO = 0;
    var countX = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "x") {
        countX++;
      } else if (str[i] === "o") {
        countO++;
      }
    }
  
    if (countX === countO) {
      return true;
    } else {
      return false;
    }
  }
  
  // console.log(countXO("xoxoxoxoxoxo"));