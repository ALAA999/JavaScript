let name = 'Alaa';
let age = 20;
let city = 'Gaza';
let job = 'Developer';

let html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city +
    '</li><li>Job: ' + job + '</li></ul>';

html = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>City: ${city}</li>
    <li>Job: ${job}</li>     
    <li>2 + 2: ${2+2}</li>
    <li>Text: ${sayHello()}</li>
    <li>Age: ${age > 30 ? 'More that 30' : 'Less that 30'}</li>
</ul>
`;

function sayHello() {
    return 'hello';
}
document.body.innerHTML = html;