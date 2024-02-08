const {distributebook}= require ('./bookclub')

test(" distribute book",() =>{
    let members = ["Emily","Jack","Sophia","Daniel"]
    let book = ["book1","book2","book3","book4"]
    let output = distributebook(members,book);
    let result  = ["Emily was given book1","Jack was given book2","Sophia was given book3","Daniel was given book4"]
   
   
  expect(result).toEqual(output)


   




})