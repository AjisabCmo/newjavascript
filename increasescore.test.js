const {add} = require ('./increasescore')
test ("adding 5 point",()=>{
    let examgrade=[85,92,78,88,95]
    let output = [90,97,83,93,100]
    let result = add(examgrade);
    expect(result).toEqual(output)

})