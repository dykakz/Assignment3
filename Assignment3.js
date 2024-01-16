// Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
//Function tersebutakan mengembalikan true jika array dari parameter tersebut merupakan 
//deret aritmatika dan false jika sebaliknya.Deret aritmatika adalah sebuah deret dimana 
//perbedaan setiap angka di deret tersebut konsisten. Contoh,2, 4,6, 8adalah deret aritmatika 
//dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9bukanlah deret aritmatika karenatidak 
//perbedaan selisih antar angka yang tidak konsisten.

// Nomor 1
// function isArithmeticProgression(numbers) {
//     let hasil;
//     let selisih = numbers[1]-numbers[0]
//     for (let i = 1; i < numbers.length-1; i++) {
//         if (numbers[i] + selisih === numbers[i+1]) {
//             hasil = true
//         } else
//         hasil = false
        
//     }
//     return hasil
// }

// console.log(isArithmeticProgression([1, 2, 3, 4, 5])); // true
// console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
// console.log(isArithmeticProgression([2, 4, 6, 8])); // true



// Nomor 2
// function threeStepsAB(text) {
//     let text_3 = text.split("")
//     console.log(text_3);
//     for (let i = 0; i < text_3.length; i++) {
//         if (text_3[i] === "a") {
//             if (text_3[i+4] === "b") {
//                 return true
//             }
//         }

//         if (text_3[i] === "b") {
//             if (text_3[i+4] === "a") {
//                 return true
//             }
//         }
//     }
//     return false
    
// }

// console.log(threeStepsAB('lane borrowed'));
// console.log(threeStepsAB('bacon and meat'));


//Nomor 3
// function sumArray(arr, int) {
//     let hasil=[] 
//     for (let i = 0; i < arr.length; i++) {
//         let angkapasangan = int - arr[i]
//         console.log(arr[i], "==> ini arr pertama");
//         console.log(angkapasangan, "==> ini angkapasangan");
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j] == angkapasangan) {
//                 hasil.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return hasil
// }

// console.log(sumArray([2, 1, 4, 3], 5));


//Nomor 4
function arrSum(arr) {
    let maxsum = -99999
    let currentsum = 0
    let start_index = 0
    let end_index = arr.length-1
    // console.log(arr, "==> ini arraynya");
    for (let i = 0; i < arr.length; i++) {
        if (currentsum < 0) {
            currentsum = arr[i]
            // console.log(currentsum,"==> currentsum awal");
            start_index = i
        }else {
            currentsum += arr[i]
            // console.log(currentsum,"==> currentsum else");
        }

        if (maxsum < currentsum) {
            maxsum = currentsum
            // console.log(maxsum,"==> ini maxsum");
            end_index = i
        }
    }
    // let hasil = arr.slice(start_index, end_index+1)
    // return [hasil, maxsum]
    return [arr.slice(start_index, end_index+1), maxsum]
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));