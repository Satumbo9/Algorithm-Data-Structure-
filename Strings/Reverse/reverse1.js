const greetings = 'Hello my family today is a nice day to say thank you!';
const shortGreetings = "Hi, how are you?"
const revword = [...greetings].reverse().join("");
const revwordshort = [...shortGreetings].reverse().join('');
console.log(revword);
console.log(revwordshort);