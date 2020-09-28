// setting defult sign----
let sign = 'X';

// getting all boxes-----
let boxes = document.querySelectorAll('td');

// getting object of span to show turn-----
let turn = document.querySelector(".turn");

// called on clicking any box-----
function giveSign(e) {
    // getting box which is clicked-----
    let box = document.querySelector(`.${e.target.classList[0]}`);

    // setting x or 0 to box if it empty-----
    if (box.innerHTML == '') {
        box.innerHTML = sign;
        // checking winner-----
        winner();
        // changing sign for next turn-----
        if (sign == 'X') sign = '0';
        else sign = 'X';
        // telling which sign is going to be used-----
        turn.innerHTML = sign;
    }
}

// it return the innerHTML of a box-----
function getbox(number) {
    return document.querySelector(`.r${number}`).innerHTML;
}

// it checkes wheter all boxes have same sign or not-----
function checkmove(a, b, c, sign) {
    if (getbox(a) == sign && getbox(b) == sign && getbox(c) == sign) return true;
}

// called by givesign() for every click-----
function winner() {
    // checking if design is formesd or not-----
    if (checkmove(1, 2, 3, sign) || checkmove(4, 5, 6, sign) || checkmove(7, 8, 9, sign) ||
        checkmove(1, 4, 7, sign) || checkmove(2, 5, 8, sign) || checkmove(3, 6, 9, sign) ||
        checkmove(1, 5, 9, sign) || checkmove(3, 5, 7, sign)) {
        // setting winner-----
        document.querySelector('.result').innerHTML = `player with "${sign}" has won the game`;
        // making result div visible-----
        document.querySelector('.resultPage').style.visibility = 'visible';
    }
    else {
        // no winnig design is formed-----
        let res = 0;
        // checking if all boxes are empty or not
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML != '') res++;
        }
        // if all boxes are non-empty then it is tie-----
        if (res==9) {
            document.querySelector('.result').innerHTML = `its a tie`;
            document.querySelector('.resultPage').style.visibility = 'visible';
        }
    }
}

// called on clicking play-new-game button-----
function reset() {
    // making all boxes empty-----
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
    }
    // hiding result shower-----
    document.querySelector('.resultPage').style.visibility = 'hidden';
    // setting sign for new game-----
    sign = 'X';
    // showing sign for new game-----
    document.querySelector('.turn').innerHTML = 'X';
}