//Make a button. When it is clicked, the page should display an alert box
$('body').append('<button class="btn">You should definitely click this!</button>');
$('.btn').click(function () {
    alert("It'S A TRAP!");
})


//When the button is clicked, display an alert with the message that is typed in the text box
$('#btn2').click(function () {
    alert($('[type="text"]').val());
});



//Make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
$('#div1').mouseover(function () {
    $('#div1').css('background-color', '#00fa99');
})

$('#div1').mouseout(function () {
    $('#div1').css('background-color', '');
})


//Make it where when you click on the paragraph, the color of the text switches to a random color each click
$('p').click(function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    $('p').css('color', `rgb(${r}, ${g}, ${b}`);
    $('p').css('userSelect', 'none');
})


//When the button is clicked, add a span that contains you name to the empty div
$('#btn3').click(function (hamburger) {
    hamburger.preventDefault();
    $('.div2').append('<span>Andrew</span>')
})


//When the button is clicked, add each friend's name as an li to the ul on the page.
const friends = ['Erin', 'Caroline', 'Joe', 'Ariana', 'Winnie', 'Odin', 'Martha', 'Jim', 'Brianna', 'Katie'];

let friendIdx = 0;

$('#btn4').click(function (e) {
    e.preventDefault();
    if (friendIdx < friends.length) {
        const friendName = friends[friendIdx];
        friendIdx++;
        const friendArray = $('<li>' + friendName + '</li>');
        $('ul').append(friendArray);
        
    }
})


