
// Given 2 arrays, craete a function that let's a user know (true/false) whether these two arrays contain any commmon items 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false;

// -------------------------------

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true; 

// function checkDoubles(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === sum) {
//             sum.push(arr)
//         }
//     }
// }

// 2 parameters - arrays - no size limit 
// return true or false

// Brute Force 
// O()
// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; i++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }        
//     }
//     return false;
// }

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }

// array2[index] === obj.properties

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2) {
    // loop through first array and create object where properties === items in the array.
    // create an object
    let map = {}
    // loop through first arr1
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            let item = arr[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; i++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false; 
}

// O(a + b)

// function hasPairWithSum(arr, sum) {
//     const hashMap = new Set();
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//         if (hashMap.has(arr[i])) {
//             return true;
//         }
//         hashMap.add(sum - arr[i]) 
//     }
//     return false; 
// }


// Come up with a way to come up with a sum in a pair