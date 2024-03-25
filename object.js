//OBJECT

// function ubahKeObjek(array) {
//     var result = {}
//     result.jenis = array[0];
//     result.harga = array[1];
//     result.enak = array[2];
//     return result;
  
// }

// console.log(ubahKeObjek(["Durian", 75000, true]));



// var caca = {
//     nama : "caca",
//     berat : 45,
//     tinggi : 155,
//     hobby : ["nonton", "makan"],

//     sebutkanHobby : function (){
//         console.log("hobby caca :")
//         for (var i = 0; i < this.hobby.length; i++){
//             console.log (i+1 + "." + this.hobby[i]) // this memanggil dirinya sendiri
//         }
//     }
// }
// caca.sebutkanHobby();



//menggunakan var...in
// var vehicle ={
//     nama: "civic",
//     cc: 5000,
//     brand: "Honda",
//     tags: [
//         "Icgc", "gas"
//     ],
//     address: {
//         city: "Jakarta",
//         province: "DKI Jakarta"
//     }
// }
// console.log(vehicle.tags); //hanya memanggil tags
// console.log(vehicle.address.city);// memanggil objek address

// for (var key in vehicle){
//     console.log(key); // mencetak kuncinya
//     console.log(vehicle[key]); // mencetak isinya
// }




//ARRAY OBJECT

// var items = [
//     {
//         id: 1,
//         nama: "laptop",
//         price: 55000
//     },
//     {
//         id: 2,
//         nama: "keyboard",
//         price: 400
//     }
// ]
// console.log(items);


var widia ={
    name : "Widia Oktapiani",
    weight : 80,
    height : 160,
    hobbies : ["nonton","game"],

    sebutkanHobbies: function(){
        console.log("My Hobby is :");
        for (var i = 0 ; i < this.hobbies.length ; i++){
            console.log(i+1 + ". " + this.hobbies[i]);
        }
    },

    tambahkanHobbies: function(hobbyName){
        this.hobbies.push(hobbyName);
    },

};

// widia.tambahkanHobbies("coding");
// widia.sebutkanHobbies();


/**STUDY CASE 1
 * tentukan jumlah huruf vokal dalam suatu kalimat
 * 
 * contoh var str ="buka puasa bersama teman kuliah"
 * 
 * result
 *  a : 7,
    i : 1,
    u : 3,
    e : 2,
    o : 0,
 */

function countVowels(str) {
    var result = {
        a : 0,
        i : 0,
        u : 0,
        e : 0,
        o : 0,
    };

    for(var i = 0 ; i < str.length ; i++){
        if(str[i] === "a"){
            result.a++;
        } else if(str[i] === "i"){
            result.i++;
        } else if(str[i] === "u"){
            result.u++;
        } else if(str[i] === "e"){
            result.e++;
        } else if(str[i] === "o"){
            result.o++;
        }
    }
    console.log(result);
}

// countVowels("buka puasa bersama teman kuliah");



/**STUDY CASE 2
 * tentukan voting atau nama nilai bilangan yang sering keluar
 * 
 * contoh 
 * var votes = ["widia", "renjun", "widia"]
 * 
 * result
 *  {
 * widia : 2
 * renjun : 1
 * }
 * 
 * pemenangnya adalah widia
 */

function countVotes(arr){
var result = {
    widia : 0,
    renjun: 0
}

    for (var i = 0 ; i < arr.length ; i++) {
        if( arr[i].toLowerCase() === "widia"){
            result.widia++;
        } else if ( arr[i].toLowerCase() === "renjun"){
            result.renjun++;
        }
    }
    console.log(result)
}

countVotes(["widia","widia","renjun", "renjun"]);