// async = off load nhung doan call back r chay nhung thang tiep  

const fs = require('fs')

fs.readFile('./content/text.txt','utf8',(err,result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const text = result;
    fs.readFile('./content/text2.txt','utf8',(err,result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const text2 = result;
        fs.appendFile('./content/result2.txt',`Dang iuu level 4 hihi\n${text} va ${text2}`,(err,result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})

// fs.readFile('./content/text.txt','utf8',(err,result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     const text = result;
// })
// console.log(result);
// fs.readFile('./content/text2.txt','utf8',(err,result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     const text2 = result;
// })
// console.log(text, text2);
// fs.writeFile('./content/result2.txt',`Dang iuuu level 2 hihi\n${result}`,)