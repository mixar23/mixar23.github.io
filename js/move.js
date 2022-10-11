var deafault_board = [[4,3,2,5,6,2,3,4],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[7,7,7,7,7,7,7,7],[10,9,8,11,12,8,9,10]];


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
            try{
                blocks[x+2][y+1] = 1;
            }catch{
                console.log('-1_varxant');
            }
            try{
                blocks[x+2][y-1] = 1;
            }catch{
                console.log('-1_varxant');
            }
            try{
                blocks[x+1][y+2] = 1;
            }catch{
                console.log('-1_varxant');
            }
            try{
                blocks[x+1][y-2] = 1;
            }catch{
                console.log('-1_varxant');
            }
            try{
                blocks[x-1][y+2] = 1;
            }catch{
                console.log('-1_varxant');
            }
            try{
                blocks[x-1][y-2] = 1;
            }catch{
                console.log('-1_varxant');
            }
            try{
                blocks[x-2][y+1] = 1;
            }catch{
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
    return blocks;


}

// function ayailable_box(x0,y0,board,fig){//board расположение фигур в данный момент
//     blocks = can_move_to(x0,y0,fig);
//     //если на месте стоит фигура ставим значение возможности хода 0 в списке возможных ходов
//     for (let i = 0; i <= 7;i++){
//         for( let l = 0; l<= 7;l++){
//             // смотрим есть ли на этом месте сейчас фигура 
//             if (board[i][l] != 0){
//                 if (div(board[i][l],7)-div(fig,7) != 0){//смотрит если фигуры разного цвета
//                     blocks[i][l] = 0;
//                 }
//             }
            
//         }
//     }
//     return blocks;
//     }

//проверим есть ли на линии к точке фигура
//true если нет, false если есть
function is_figure_on_line(x,y,x0,y0,board){

    //для строки
    if (x == x0){
        if (y > y0){
            var i = y0 + 1;
            while (i != y){
                
                if (board[x][i] != 0){
                    return false;
                }
                i++;
                
            }
            return true;
        }
        if (y < y0){
            var i = y0 - 1;
            while (i != y){
                
                if (board[x][i] != 0){
                    return false;
                }
                i--;
            }
            return true;
        }
    }

    //для столбцов
    if (y == y0){
        console.log('step');
        if (x > x0){
            console.log('step');
            var i = x0 + 1;
            while (i != x){
                
                if (board[i][y] != 0){
                    return false;
                }
                i++;
                
            }
            return true;
        }
        if (x < x0){
            console.log('step');
            var i = x0 - 1;
            while (i != x){
                console.log('step');
                if (board[i][y] != 0){
                    return false;
                }
                i--;     
            }
            return true;
        }
    }

}

function is_figure_on_diagline(x,y,x0,y0,board){
    var i = x0;
    var l = y0;
    while((i != x)&&(l != y)){
        if (x > x0){
            i++;
        }else{
            i--;
        }
        if (y >y0){
            l++;
        }else{
            l--;
        }
        if(i != x){
            if (board([i][l]) != 0){
                return false;
            }
        }else{
            return true;
        }
    }



    if (x = x0){
        if (y > y0){
            for (let i = y0; i < y; i++){
                if (board[x][i] != 0){
                    return false;
                }
            }
        }
        if (y < y0){
            for (let i = y0; i > y; i--){
                if (board[x][i] != 0){
                    return false;
                }
            }
        }
    }

    //для столбцов
    if (y = y0){
        if (x > x0){
            for (let i = x0; i < x; i++){
                if (board[x][i] != 0){
                    return false;
                }
            }
        }
        if (x < y0){
            for (let i = x0; i > x; i--){
                if (board[x][i] != 0){
                    return false;
                }
            }
        }
    }


    }