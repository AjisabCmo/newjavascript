const {square} = require('./squarenumber')
test("square of number",() =>{
    let input = [2, 4, 6, 8, 10]
    let output = [4,16,36,64,100]
    let result = square(input);
    expect(result).toEqual(output)

})