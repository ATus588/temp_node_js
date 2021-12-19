// sync = chay code theo tung dong

const fs = require('fs')

const text = fs.readFileSync('./content/subfolder/text.txt','utf8');
const text2 = fs.readFileSync('./content/text2.txt','utf8');

console.log(text, text2);
fs.writeFileSync('./content/result.txt',`Chung ta that la dang iu vi ${text} va ${text2}`,{flag: 'a'})