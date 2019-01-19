let firstName = 'Alaa';
let lastName = 'Alzibda';
let str = 'Hello world this is Alaa';

let fullName = firstName + lastName;
fullName = firstName + ' ' + lastName;
// firstName += lastName;
fullName = "That's my name, dude";
fullName = 'That\'s my name'; // \ Makes the char after it just a normall charachter
fullName = fullName.length;
fullName = firstName.concat(lastName); // Wihtout space
fullName = firstName.concat(' ', lastName);
fullName = fullName.toUpperCase();
fullName = fullName.toLowerCase();
fullName = firstName[1]; // l
fullName = lastName.indexOf('z'); // It checks from the begining and once it finds the letter it will get the index of it
fullName = lastName.lastIndexOf('a'); // It checks from the end and once it finds the letter it will get the index of it
fullName = firstName.charAt('2');
fullName = firstName.substring(0, 3); // Ala
fullName = lastName.slice(0, 3); // Alz
fullName = firstName.slice(-3); // laa it starts from the end
let splitedArray = str.split(' ');
fullName = str.replace('Alaa', 'Ali');
fullName = str.includes('world');
console.log(fullName);