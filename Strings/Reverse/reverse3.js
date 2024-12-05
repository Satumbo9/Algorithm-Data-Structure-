// Using functions 

const word = "Hello";

//Method 1 
const reverseString1 = (word)=>{

//Checking valid Input
    if(!word || word.length < 2 || typeof word !== 'string')
    {
        return console.log("Invalid string");
    }

//Converting it to Array 
    const final = word.split("").reverse().join("");


    //Returning the final result
    return console.log("The result is : " +  final.join("")); 
}



//Method 2
const reverseString2 = (word) =>{

if(!word || word.length < 2 || typeof word !== 'string')
{
            return console.log("Invalid string");
}

    const helper = word.split('');
    const final = [];
    
    for(let i=helper.length - 1; i >=0; i--)
    {
        final.push(word[i]);
    }


    return console.log("The result is : " +  final.join("")); 
}
const result  = reverseString2(word);


