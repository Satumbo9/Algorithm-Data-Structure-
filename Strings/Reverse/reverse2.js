const greetings = 'Hello my family today is a nice day to say thank you!';
const revword =  [...greetings];
let revArray = [];

for(let i = revword.length - 1; i >=0; i-- )
{
    revArray.push(revword[i]);
}    

const finalword = revArray.join("");
console.log(finalword);
