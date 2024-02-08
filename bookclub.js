const distributebook = (members,books) =>{
    let newArray = []
    for (const index in members){
        let collection = members[index]
        let book = books[index]
        let answer = collection + " was given " + book;
        newArray.push(answer)
    }
    return newArray
}
module.exports ={distributebook}