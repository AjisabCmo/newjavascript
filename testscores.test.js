const {studentScore} = require('./testscores');

test("greater score", () =>{
    let input = [10,20,30,40,50,60,70,80,90,100]
    let output = [70,80,90,100]
    let result = studentScore(input)
    expect(result).toEqual(output)
})