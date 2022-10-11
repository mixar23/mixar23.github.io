var deafault_board = [[4,3,2,5,6,2,3,4],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[7,7,7,7,7,7,7,7],[10,9,8,11,12,8,9,10]];


function changepos(x,y,x1,y1,board_in){
    var board = board_in;
    board[x1][y1] = board[x][y];
    board[x][y] = 0;
    return board
    
}
var elements = []
                //base_desk:
                var bd = [[4,3,2,5,6,2,3,4],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[7,7,7,7,7,7,7,7],[10,9,8,11,12,8,9,10]];
                var ids = ['chess_figure_1','chess_figure_2','chess_figure_3','chess_figure_4','chess_figure_5','chess_figure_6','chess_figure_7','chess_figure_8','chess_figure_9','chess_figure_10','chess_figure_11','chess_figure_12','chess_figure_13','chess_figure_14','chess_figure_15','chess_figure_16','chess_figure_1_b','chess_figure_2_b','chess_figure_3_b','chess_figure_4_b','chess_figure_5_b','chess_figure_6_b','chess_figure_7_b','chess_figure_8_b','chess_figure_9_b','chess_figure_10_b','chess_figure_11_b','chess_figure_12_b','chess_figure_13_b','chess_figure_14_b','chess_figure_15_b','chess_figure_16_b'];
                
                // где физически находятся id фигур
                var id_place = [["chess_figure_5_b","chess_figure_4_b","chess_figure_2_b","chess_figure_3_b","chess_figure_1_b","chess_figure_15_b","chess_figure_16_b","chess_figure_14_b"],["chess_figure_6_b","chess_figure_7_b","chess_figure_8_b","chess_figure_9_b","chess_figure_10_b","chess_figure_11_b","chess_figure_12_b","chess_figure_13_b"],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],["chess_figure_6","chess_figure_7","chess_figure_8","chess_figure_9","chess_figure_10","chess_figure_11","chess_figure_12","chess_figure_13"],["chess_figure_5","chess_figure_4","chess_figure_2","chess_figure_3","chess_figure_1","chess_figure_15","chess_figure_16","chess_figure_14"]];
    
                for (let i = 0;i < 32;i++){
                    elements[i] = document.getElementById(ids[i]);
                    elements[i].onmousedown = function(e) { 
    
                        //определим координаты квадрата начала движения
                        var y0_coord = div((div((e.pageX - elements[i].offsetWidth / 2) + 6,55) * 55 + 22-461),55);
                        var x0_coord = div((div((e.pageY - elements[i].offsetHeight / 2) + 32,55) * 55 - 4 - 101),55);
                        console.log('координаты начала: ',x0_coord,y0_coord);
    
                        elements[i].style.position = 'absolute';
                        var first_coorx = div((e.pageX - elements[i].offsetWidth / 2) + 6,55) * 55 + 22 + 'px';
                        var first_coory = div((e.pageY - elements[i].offsetHeight / 2) + 32,55) * 55 - 4 + 'px';
                        console.log(first_coorx,first_coory);
                        moveAt(e);
                        document.body.appendChild(elements[i]);
                        elements[i].style.zIndex = 1000;
                        function moveAt(e) {
                            elements[i].style.left = e.pageX - elements[i].offsetWidth / 2 + 'px';
                            elements[i].style.top = e.pageY - elements[i].offsetHeight / 2 + 'px';
                        }
                        function div(val, by){
                                return (val - val % by) / by;
                            }
                            //выравнивание по квадрату
                        function moveTo(e) {
                            elements[i].style.left = div((e.pageX - elements[i].offsetWidth / 2) + 6,55) * 55 + 22 + 'px';
                            elements[i].style.top = div((e.pageY - elements[i].offsetHeight / 2) + 32,55) * 55 - 4 + 'px';
                        }
                        document.onmousemove = function(e) {
                            moveAt(e);
                        }
                        elements[i].onmouseup = function(e) {
                            document.onmousemove = null;
                            elements[i].onmouseup = null;
                            //определим координаты квадрата окончания движения
                            var y_coord = div((div((e.pageX - elements[i].offsetWidth / 2) + 6,55) * 55 + 22-461),55);
                            var x_coord = div((div((e.pageY - elements[i].offsetHeight / 2) + 32,55) * 55 - 4 - 101),55);
                            console.log('координаты конца: ',x_coord,y_coord);
    
    
                            //проверка что конечные координаты находятся на доске
                            if (div((e.pageX - elements[i].offsetWidth / 2) + 6,55) * 55 + 22 > 901){
                                elements[i].style.left = first_coorx;
                                elements[i].style.top = first_coory;
    
                            }else if(div((e.pageX - elements[i].offsetWidth / 2) + 6,55) * 55 + 22 < 461){
                                elements[i].style.left = first_coorx;
                                elements[i].style.top = first_coory;
    
                            }else if(div((e.pageY - elements[i].offsetHeight / 2) + 32,55) * 55 - 4 > 500){
                                elements[i].style.left = first_coorx;
                                elements[i].style.top = first_coory;
    
                            }else if(div((e.pageY - elements[i].offsetHeight / 2) + 32,55) * 55 - 4 < 100){
                                elements[i].style.left = first_coorx;
                                elements[i].style.top = first_coory;
    
                            }else if (bd[x_coord][y_coord] == 0){// если поле пустое то передвигаем элементы в матрице и на доске
                                moveTo(e);
                                bd = changepos(x0_coord,y0_coord,x_coord,y_coord,bd);
                                id_place = changepos(x0_coord,y0_coord,x_coord,y_coord,id_place);
                                console.log(bd);
                                
                            }else{
                                // если что-то стоит уже на этом месте проверяем другой ли это цвет фигуры возвращаем на исходное положение
                                if ((div(bd[x_coord][y_coord],7) - div(bd[x0_coord][y0_coord],7)) != 0){
                                    //съедаем фигуру если она другого цвета и занимаем ее место
                                    var id_down_fig = id_place[x_coord][y_coord];
                                    fig = document.getElementById(id_down_fig);
                                    fig.parentNode.removeChild(fig);
                                    bd = changepos(x0_coord,y0_coord,x_coord,y_coord,bd);
                                    id_place = changepos(x0_coord,y0_coord,x_coord,y_coord,id_place);
                                    id_place[x0_coord][y0_coord] = 0;
                                    bd[x0_coord][y0_coord] = 0;
                                    moveTo(e)
                                }else{
                                    elements[i].style.left = first_coorx;
                                    elements[i].style.top = first_coory;
                                }
                                
    
                            }
                        }
                        }
                    elements[i].ondragstart = function() {
                        return false;
                    };   
    
                }
                console.log(elements);