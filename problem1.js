const rotateLeft = (array, number) => {
    for (let i = 0; i < number; i++) {
        let rotated = array.shift();
        array.push(rotated);
    }
    return array;
}

const result = rotateLeft([1, 2, 3, 4, 5], 4)
console.log(result);