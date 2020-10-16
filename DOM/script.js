//Make a button. When it is clicked, the page should display an alert box
const btn = document.createElement('button');
const btnText = document.createTextNode('You should definitely click this!');
btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener('click', function () {
    alert("IT'S A TRAP!");
})


//When the button is clicked, display an alert with the message that is typed in the text box

const btn2 = document.getElementById('button2');
const btnTextAlert = document.getElementsByTagName('input').value;
btn2.addEventListener('click', function () {
    alert(btnTextAlert);
});



//Make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
const div = document.getElementsByTagName('div')[0];

div.addEventListener('mouseover', function () {
    div.style.backgroundColor = '#00fa99';
})

div.addEventListener('mouseout', function () {
    div.style.backgroundColor = '';
})


//Make it where when you click on the paragraph, the color of the text switches to a random color each click
const para = document.getElementsByTagName('p')[0];
para.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    para.style.color = `rgb(${r}, ${g}, ${b})`;
    para.style.userSelect = 'none';
})

const btn3 = document.getElementById('button3');
const div2 = document.getElementsByTagName('div')[1];
const span = document.createElement('span');
const name = document.createTextNode('Andrew');
span.appendChild(name);


//When the button is clicked, add a span that contains you name to the empty div
btn3.addEventListener('click', function (hamburger) {
    hamburger.preventDefault();
    div2.appendChild(span);
})


//When the button is clicked, add each friend's name as an li to the ul on the page.
const friendsArray = ['Erin', 'Caroline', 'Joe', 'Ariana', 'Winnie', 'Odin', 'Martha', 'Jim', 'Brianna', 'Katie'];

const btn4 = document.getElementById('button4');
const ul = document.getElementsByTagName('ul')[0];
const li = document.createElement('li');

const counter = 0;

btn4.addEventListener('click', function (e) {
    friendsArray = counter;
    counter++;
    li.appendChild(counter);
        ul.appendChild(li);
        e.preventDefault();
})

/*  WRONG
const friendsArrayLoop = (e) => {
    for (let friends of friendsArray) {
        friendsArrayText = document.createTextNode(friends);
        li.appendChild(friendsArrayText);
        ul.appendChild(li);
        e.preventDefault();
    }    
}
btn4.addEventListener('click', friendsArrayLoop);
*/
    



