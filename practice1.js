function findMaxProduct(arr) {
    let maxProduct = -Infinity;

    for (let i = 0; i < arr.length - 1; i++) {    
        const product = arr[i] * arr[i + 1];
        maxProduct = Math.max(maxProduct, product);
    }

    return maxProduct;
}

const arr = [1, 5, 6, 9, 8, 2];
const maxProduct = findMaxProduct(arr);

console.log("Input:", arr);
console.log("Output:", maxProduct);
