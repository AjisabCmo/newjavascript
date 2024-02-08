const studentScore = (scores) => {
    const result = scores.filter(element => element>= 70)
    return result;
}
module.exports = {studentScore};



