let turn = 'X';
let title = document.querySelector('.title');
let squares = [];
function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById('item' + num1).style.background = '#aaa';
    document.getElementById('item' + num2).style.background = '#aaa';
    document.getElementById('item' + num3).style.background = '#aaa';

    setInterval(function () {
        title.innerHTML += '.'
    }, 1000);
    setTimeout(function () {
        location.reload();
    }, 3000)
}
var cnt = 0;
function winner() {
    var count = 0;
    cnt++;
    for (let i = 1; i < 10; i++) {

        var ID = document.getElementById('item' + i);
        squares[i] = ID.innerHTML;

    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        count++;
        end(1, 2, 3);


    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        count++;
        end(4, 5, 6);



    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        count++;
        end(7, 8, 9);



    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        count++;
        end(1, 4, 7);



    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        count++;
        end(2, 5, 8);



    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
        count++;
        end(3, 6, 9);



    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        count++;
        end(1, 5, 9);



    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        count++;
        end(3, 5, 7);



    }
    else if (cnt === 9 && count === 0) {
        title.innerHTML = `X AND Y Equivlent`;
        setInterval(function () {
            title.innerHTML += '.'
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 3000)
    }


}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    }
    else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';


    }
    winner();

}


