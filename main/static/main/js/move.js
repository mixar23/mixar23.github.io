// var chess_figure = document.getElementById('chess_desk');

// chess_figure.onmousedown = function(e) { 
//     // 1. отследить нажатие

//   // подготовить к перемещению
//   // 2. разместить на том же месте, но в абсолютных координатах
//   chess_figure.style.position = 'absolute';
//     moveAt(e);
//     // переместим в body, чтобы мяч был точно не внутри position:relative
//     document.body.appendChild(chess_figure);

//     chess_figure.style.zIndex = 1000; // показывать мяч над другими элементами

//   // передвинуть мяч под координаты курсора
//   // и сдвинуть на половину ширины/высоты для центрирования
//     function moveAt(e) {
//         chess_figure.style.left = e.pageX - chess_figure.offsetWidth / 2 + 'px';
//         chess_figure.style.top = e.pageY - chess_figure.offsetHeight / 2 + 'px';
//     }

//   // 3, перемещать по экрану
//     document.onmousemove = function(e) {
//         moveAt(e);
//     }

//   // 4. отследить окончание переноса
//     chess_figure.onmouseup = function() {
//         document.onmousemove = null;
//         chess_figure.onmouseup = null;
//     }
// }


//4-ладья(+6)
//3-конь(+6)
//2-слон(+6)
//5-ферзь(+6)
//6-король(+6)
//1-пешка(+6)
//0-пустая клетка
var deafault_board = [[4,3,2,5,6,2,3,4],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[7,7,7,7,7,7,7,7],[10,9,8,11,12,8,9,10]];


function changepos(x,y,x1,y1,board_in){
    var board = board_in;
    board[x1][y1] = board[x][y];
    board[x][y] = 0;
    return board
    
}