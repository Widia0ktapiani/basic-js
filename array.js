//ARRAY

//tampilkan number array secara vertical
// var numbers = [1,2,3,4,5];

// for (var i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

/**STUDY CASE 1
 * 
 * tampilkan nilai rata2
 */
// var stats = [10,2,3,7,1,8,5];
// var sum = 0;

// for (i = 0; i < stats.length; i++){
//     sum += stats[i];
// }
// mean = sum / stats.length;
// console.log("Mean: " + mean.toFixed(2))



/** STUDY CASE 2
 * 
 * pecah sebuah kalimat perkata
 * 
 * result
 * ["buku","bersama","teman","kuliah","seru"]
 * 
 */

// var str = "buka bersama teman kuliah seru";
// var resultArray = [];
// var resultStr = '';

// for (i = 0; i < str.length; i++){
//     if (str[i] !== " ") {
//         resultStr += str[i]
        
//     } else {
//         resultArray.push(resultStr)
//         resultStr = ''
        
//     }
//     if (i === str.length - 1) {
//         resultArray.push(resultStr)
//         resultStr = ''
        
//     }

// }
// console.log(resultArray)


/**
 * STUDY CASE 3
 * 
 * result
 * 1. vincent, IPK : 3.5, Lulus
 * 2. udin, IPK : 3.0, Lulus
 * 3. mamang, IPK : 2.1, Tidak Lulus
 */
//  var murid = [ 
//                 [1, "Vincent", 3.5],
//                 [2, "Udin", 3.0],
//                 [3, "Mamang", 2.1] 
//             ]

// for (i = 0; i < murid.length; i++) {
//     if (murid[i][2] >= 3.0) {
//         console.log(murid[i][0] + ". " + murid[i][1] + ", IPK :" + murid[i][2] + ", Lulus" )
        
//     } else {
//         console.log(murid[i][0] + ". " + murid[i][1] + ", IPK :" + murid[i][2] + ", Tidak Lulus" )
        
//     }
// }


/**STUDY CASE 5
 * 
 * hitung jumlah voting dari suara vote yang ada
 */

var countVincent = 0;
var countAdmin = 0;
var countNcent = 0;

var votes = ["vincent","admin","ncent","vincent","ncent","vincent"]

for (i = 0; i < votes.length; i ++){
    if (votes[i] == "vincent") {
        countVincent++;

    } else if (votes[i] == "admin"){
        countAdmin++;

    } else if (votes[i] == "ncent"){
        countNcent++;
    }
}
console.log([
    ["vincent", countVincent],
    ["admin", countAdmin],
    ["ncent", countNcent]
])