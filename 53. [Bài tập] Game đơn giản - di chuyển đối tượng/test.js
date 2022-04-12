let arr = [
    [11,    2,  4],
    [4,     5,  6]
    [10,    8, -12]
    ]

function diagonalDifference(arr) {
    // Write your code here
    let total1= 0;
    let total2=0;
    let newarr=[]
    let x
    for (let i = 0; i < arr.length; i++) {
        total1 += arr[i][i];
    }

    for (let j = 0; j < arr.length ; j++ ){
        total2 += arr[j][arr.length - 1 - j]
    }

    newarr = [total2, total1];
    newarr.sort((a,b) =>{ a - b})
    return x = newarr[1]-newarr[0];
}
console.log(x)
