//var deafault_board = [[4,3,2,5,6,2,3,4],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[7,7,7,7,7,7,7,7],[10,9,8,11,12,8,9,10]];
//шах
function div(val, by){
    return (val - val % by) / by;
}

function move_to_busy(x_coord,y_coord,x0_coord,y0_coord,bd,id_place){
    bd = changepos(x0_coord,y0_coord,x_coord,y_coord,bd);
    id_place = changepos(x0_coord,y0_coord,x_coord,y_coord,id_place);
    id_place[x0_coord][y0_coord] = 0;
    bd[x0_coord][y0_coord] = 0;
    sound.play();//звук хода
    w_b_step += 1;//кто ходит
    if (w_b_step % 2 == 0){
        step_text.innerHTML = "white's turn";
    }else{
        step_text.innerHTML = "black's turn";
    }
    step_shine(x_coord,y_coord,x0_coord,y0_coord);
    ybox = document.getElementById('cur_step');
    ybox.style.opacity = 0.5;
    ybox2 = document.getElementById('cur_step2');
    ybox2.style.opacity = 0.5;
    last_step = [x0_coord,y0_coord,x_coord,y_coord];
    console.log(last_step);
    //отслеживание есть ли возможность сделать рокировку
    if(x0_coord == 7 && y0_coord == 4){
        w_king_steps = 1
    }
    if(x0_coord == 0 && y0_coord == 4){
        b_king_steps = 1
    }
    if((x0_coord == 7 && y0_coord == 0)||(x_coord == 7 && y_coord == 0)){
        w_castles[0] = 1
    }
    if((x0_coord == 7 && y0_coord == 7)||(x_coord == 7 && y_coord == 7)){
        w_castles[1] = 1
    }

    if((x0_coord == 0 && y0_coord == 0)||(x_coord == 0 && y_coord == 0)){
        b_castles[0] = 1
    }
    if((x0_coord == 0 && y0_coord == 7)||(x_coord == 0 && y_coord == 7)){
        b_castles[1] = 1
    }

}
function move_broken(w_b_step){
    if (w_b_step % 2 == 1){
        var res = [970 + 55 * (white_figs % 7),104 + 55 * div(white_figs,7)]
        white_figs += 1;
    }else{
        var res = [970 + 55 * (black_figs % 7),434 + 55 *div(black_figs,7)]
        black_figs += 1;  
    }
    console.log('get',res);
    return res
}

//Передвижение клетки на свободное место
function move_to_free(x0_coord,y0_coord,x_coord,y_coord,bd,id_place){
    bd = changepos(x0_coord,y0_coord,x_coord,y_coord,bd);
    id_place = changepos(x0_coord,y0_coord,x_coord,y_coord,id_place);
    sound.play();//звук хода 
    w_b_step += 1;//кто ходит
    if (w_b_step % 2 == 0){
        step_text.innerHTML = "white's turn";
    }else{
        step_text.innerHTML = "black's turn";
    }
    step_shine(x_coord,y_coord,x0_coord,y0_coord);
    ybox = document.getElementById('cur_step');
    ybox.style.opacity = 0.5;
    ybox2 = document.getElementById('cur_step2');
    ybox2.style.opacity = 0.5;
    last_step = [x0_coord,y0_coord,x_coord,y_coord];
    console.log(last_step);

    //отслеживание есть ли возможность сделать рокировку
    if(x0_coord == 7 && y0_coord == 4){
        w_king_steps = 1
    }
    if(x0_coord == 0 && y0_coord == 4){
        b_king_steps = 1
    }
    if(x0_coord == 7 && y0_coord == 0){
        w_castles[0] = 1
    }
    if(x0_coord == 7 && y0_coord == 7){
        w_castles[1] = 1
    }

    if(x0_coord == 0 && y0_coord == 0){
        b_castles[0] = 1
    }
    if(x0_coord == 0 && y0_coord == 7){
        b_castles[1] = 1
    }


    //проверка этого хода на рокировку
    console.log(x0_coord,y0_coord,x_coord,y_coord,bd[x0_coord][y0_coord])
    //белая рокировка
    if(x0_coord == 7 && y0_coord == 4 && x_coord == 7 && y_coord == 6 && bd[x_coord][y_coord] == 12){
        el = document.getElementById(id_place[7][7])
        console.log("hereee",el)
        bd = changepos(7,7,7,5,bd);
        id_place = changepos(7,7,7,5,id_place);
        el.style.left = 737 +"px"
        el.style.top = 488 + "px"
        
    }
    if(x0_coord == 7 && y0_coord == 4 && x_coord == 7 && y_coord == 2 && bd[x_coord][y_coord] == 12){
        el = document.getElementById(id_place[7][0])
        console.log("hereee",el)
        bd = changepos(7,0,7,3,bd);
        id_place = changepos(7,0,7,3,id_place);
        el.style.left = 627 +"px"
        el.style.top = 488 + "px"
        
    }
    //черная рокировка
    if(x0_coord == 0 && y0_coord == 4 && x_coord == 0 && y_coord == 6 && bd[x_coord][y_coord] == 6){
        el = document.getElementById(id_place[0][7])
        console.log("hereee",el)
        bd = changepos(0,7,0,5,bd);
        id_place = changepos(0,7,0,5,id_place);
        el.style.left = 737 +"px"
        el.style.top = 104 + "px"
        
    }
    if(x0_coord == 0 && y0_coord == 4 && x_coord == 0 && y_coord == 2 && bd[x_coord][y_coord] == 6){
        el = document.getElementById(id_place[0][0])
        console.log("hereee",el)
        bd = changepos(0,0,0,3,bd);
        id_place = changepos(0,0,0,3,id_place);
        el.style.left = 627 +"px"
        el.style.top = 104 + "px"
        
    }
}

//подсветка последнего хода
function step_shine(y,x,y1,x1){
    x = 462 + x * 55;
    y = 105 + y * 55;
    x1 = 462 + x1 * 55;
    y1 = 105 + y1 * 55;
    console.log(x,y,x1,y1);
    step_color.style.top = y + 'px';
    step_color.style.left = x + 'px';
    step_color2.style.top = y1 + 'px';
    step_color2.style.left = x1 + 'px';

}

//поменять координаты фигуре на матрице текущих положений фигур
function changepos(x,y,x1,y1,board_in){
    var board = board_in;
    board[x1][y1] = board[x][y];
    board[x][y] = 0;
    return board;
}

//возможные ходы по пустому полю из точки с координатами x y фигурой fig 
function can_move_to(x,y,fig){
    blocks = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]
    blocks[x][y]  = 1;
    //как ходят ладьи
    if (fig%6 == 4){
        for (let i = 0;i < 8;i++){
            for (let l = 0;l < 8;l++){
                if ((i == x) || (l == y)){
                    blocks[i][l] = 1;
                }
            }
        }
    }
    //как ходят кони
    if (fig%6 == 3){
        try{
            blocks[x-2][y-1] = 1;
        }catch{
            console.log('-1_varxant');
        }
        if (x < 6 && y < 7){
            blocks[x+2][y+1] = 1;
        }else{
            console.log('-1_varxant');
        }
        if (x < 6 && y > 0){
            blocks[x+2][y-1] = 1;
        }else{
            console.log('-1_varxant');
        }
        if (x <  7 && y < 6){
            blocks[x+1][y+2] = 1;
        }else{
            console.log('-1_varxant');
        }
        if (x < 7 && y > 1){
        blocks[x+1][y-2] = 1;
        }else{
            console.log('-1_varxant');
        }
        if (x > 0 && y < 6){
            blocks[x-1][y+2] = 1;
        }else{
            console.log('-1_varxant');
        }
        try{
            blocks[x-1][y-2] = 1;
        }catch{
            console.log('-1_varxant');
        }
        if (x > 1 && y < 7){
            blocks[x-2][y+1] = 1;
        }else{
            console.log('-1_varxant');
        }        
    }
    //как ходят слоны
    if  (fig%6 == 2){
            let x2 = x;
            let  y2 = y;
            while ((x2 < 7)&&(y2 < 7)){
                x2 += 1;
                y2 += 1;
                blocks[x2][y2] = 1;
            }
            x2 = x;
            y2 = y;
            while ((x2 > 0)&&(y2 < 7)){
                x2 -= 1;
                y2 += 1;
                blocks[x2][y2] = 1;
            }
            x2 = x;
            y2 = y;
            while ((x2 < 7)&&(y2 > 0)){
                x2 += 1;
                y2 -= 1;
                blocks[x2][y2] = 1;
            }
            x2 = x;
            y2 = y;
            while ((x2 > 0)&&(y2 > 0)){
                x2 -= 1;
                y2 -= 1;
                blocks[x2][y2] = 1;
            }
        }
        //как ходят ферзи
        if  (fig%6 == 5){
            for (let i = 0;i < 8;i++){
                for (let l = 0;l < 8;l++){
                    if ((i == x) || (l == y)){
                        blocks[i][l] = 1;
                    }
                }
            }
            let x2 = x;
            let  y2 = y;
            while ((x2 < 7)&&(y2 < 7)){
                x2 += 1;
                y2 += 1;
                blocks[x2][y2] = 1;
            }
            x2 = x;
            y2 = y;
            while ((x2 > 0)&&(y2 < 7)){
                x2 -= 1;
                y2 += 1;
                blocks[x2][y2] = 1;
            }
            x2 = x;
            y2 = y;
            while ((x2 < 7)&&(y2 > 0)){
                x2 += 1;
                y2 -= 1;
                blocks[x2][y2] = 1;
            }
            x2 = x;
            y2 = y;
            while ((x2 > 0)&&(y2 > 0)){
                x2 -= 1;
                y2 -= 1;
                blocks[x2][y2] = 1;
            }
        }
        if(fig%6 == 0){
            for (let i = x - 1; i <= x + 1;i++){
                for (let l = y - 1; l <= y + 1;l++){
                    if ((7 >= l)&&(7 >= i)&&((l >= 0)&&(i >= 0))){
                        blocks[i][l] = 1;
                    }else{
                        console.log('-1_variant');
                    }
                }
            }
        }
        //черные пешки
        if (fig == 1){
            if (x != 7){
                for (let i = y - 1;i <= y + 1;i++){
                    if ((i >= 0)&&(i <= 7)){
                        blocks[x+1][i] = 1;
                    }
                    
                }
            }
            if (x == 1){
                blocks[x+2][y] = 1;
            }

        }
        //белые пешки
        if (fig == 7){
            if (x != 0){
                for (let i = y - 1;i <= y + 1;i++){
                    if ((i >= 0)&&(i <= 7)){
                        blocks[x-1][i] = 1;
                    }   
                }
            }
            if (x == 6){
                blocks[x-2][y] = 1;    
            }
        }
    console.log('step',blocks);
    return blocks;
}


function is_figure_on_line(x,y,x0,y0,board){

    //для строки
    if (x == x0){
        console.log('stroka');
        var ind = y0;
        if (y > y0){            
            while (ind != y-1){             
                ind++;
                if (board[x][ind] != 0){
                    return false;
                }                
            }
            return true;
        }
        if (y < y0){
            while (ind != y+1){
                ind--;
                if (board[x][ind] != 0){
                    return false;
                }
            }
            return true;
        }
    }else if (y == y0){
        console.log('stolbec');
        var ind = x0;
        if (x > x0){
            while (ind != x - 1){
                ind++;
                if (board[ind][y] != 0){
                    return false;
                }
            }
            return true;
        }
        if (x < x0){
            while (ind != x +1){
                ind--;  
                if (board[ind][y] != 0){
                    return false;
                }  
            }
            return true;
        }
        return true;
    }else{
        console.log('diagonal',x,y,x0,y0);
        var ind = x0;
        var lnd = y0;
        while((ind != x)&&(lnd != y)){
            if (x > x0){
                if(ind == x - 1){
                    return true;
                }
                ind++;
            }else{
                if(ind == x + 1){
                    return true;
                }
                ind--;
            }
            if (y >y0){
                if(lnd == y - 1){
                    return true;
                }
                lnd++;
            }else{
                if(lnd == y + 1){
                    return true;
                }
                lnd--;
            } 
            if (board[ind][lnd] != 0){
                return false;
            }
        }
        return true;

    }

}