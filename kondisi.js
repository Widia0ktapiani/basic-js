//KONDISI




//KONDISI BERSARANG
// var umur = 16;
// var tinggi = 149;

// if (umur < 17) {
//     if (tinggi < 150) {
//         console.log("tidak boleh masuk")  
//     }
    
// } else {
//     console.log("boleh masuk")  
// }

// if (umur < 17 && tinggi < 150) {
//     console.log("Tidak boleh masuk");
    
// } else if (tinggi = 150) {
//     console.log("boleh masuk");
    
// } else{

// }

//STUDY CASE 1
/**
 * ALGORITMA
 * 1. buat variable angka
 * 2. cek jika angka modulus 2 sama dengan 0, maka bilangan genap
 * 3. cek jika angka modulus 2 sama dengan 1, maka bilangan ganjil
 * PSEUDECODE
 * STORE angka with ANY NUMBER
 * IF angka MOD 2 EQUAL 0 THEN
 * PRINT "bilangan genap"
 * ELSE
 * PRINT "bilangan ganjil"
 */

//ganjil genap
// var angka = 4;
// if (angka % 2 == 0) {
//     console.log("bilangan genap");
    
// } else {
//     console.log("bilangan ganjil");
    
// }

//STUDY CASE 2

//GRADE NILAI
/**
 * ALGORITMA
 * 1. buat variable score
 * 2. cek jika score sama dengan 85 hingga 100 maka grade A
 * 3. cek jika score sama dengan 70 hingga 84 maka grade B
 * 4. cek jika score sama dengan 50 hingga 69 maka grade C
 * 5. cek jika score sama dengan 30 hingga 49 maka grade D
 * 6. cek jika score sama dengan 0 hingga 30 maka grade E
 * 
 *PSEDEUCODE
 * STORE score WITH ANY NUMBER
 * 
 * IF score GREATER THAN EQUAL 85 AND LESS THAN EQUAL 100 THEN
 * PRINT "GRADE A"
 * ELSE IF score GREATER THAN EQUAL 70 AND LESS THAN EQUAL 84 THEN
 * PRINT "GRADE B"
 * ELSE IF score GREATER THAN EQUAL 50 AND LESS THAN EQUAL 69 THEN
 * PRINT "GRADE C"
 * ELSE IF score GREATER THAN EQUAL 30 AND LESS THAN EQUAL 49 THEN
 * PRINT "GRADE D"
 * ELSE IF score GREATER THAN EQUAL 0 AND LESS THAN EQUAL 30 THEN
 * PRINT "GRADE E"
 * ELSE
 * PRINT "GRADE F"
 */

 var score = 50;

 if (score >= 85 && score <= 100) {
    console.log("GRADE A");
}
 else if (score >= 70 && score <= 84) {
    console.log("GRADE B");
    
 }
 else if (score >= 50 && score <= 69) {
    console.log("GRADE C");
    
 }
 else if (score >= 49 && score <= 30) {
    console.log("GRADE D");
    
 }
 else if (score < 30 && score >= 0) {
    console.log("GRADE E");
    
 }

 else {
    console.log("GRADE F");
    
 }