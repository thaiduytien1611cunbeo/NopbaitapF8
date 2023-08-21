var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (output, current) {
    return output.concat(current);
}, [])

console.log(flatArray);

