module.exports =function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0){
        return [];
    }
    if(matrix.length === 1) {
        return matrix;
    }
    let newArr=[];
    matrix.forEach((element,counter) => {
        if(counter%2===0) {
            element.forEach(num => {
                newArr.push(num);
            })
        } else {
            element = element.reverse();
            element.forEach(num => {
                newArr.push(num);
            });
        }
    });
    return newArr;
}
