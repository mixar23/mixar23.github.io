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
