function show_p(x,y,fig){
    var res = can_move_to(x,y,fig);
    res = pos_moves(x,y,fig,bd,res);
    var lazyloadImages = document.querySelectorAll("img.kkrug");
    let count = 0;
    for (const [index, element] of res.entries()){
        for (const [index1, element1] of element.entries()){
            if (element1 == 1){
                let img = lazyloadImages[count];
                img.style.left = 480 + 55 * index1 + 'px';
                img.style.top = 120 + 55 * index + 'px';
                img.style.opacity = 0.5;
                img.style.zIndex = 110;
                count += 1;
            }
        } 
    }
}
function clear_p(){
    var lazyloadImages = document.querySelectorAll("img.kkrug");
    lazyloadImages.forEach(function opac(i){
        i.style.opacity = 0;
        i.style.zIndex = -110;
    })
}

function pos_moves(x,y,fig,bd,res){

    //список координат точек
    var res_mas = get_coords(res)


    // белые пешки
    if (fig == 7){
        var list = [7,8,9,10,11,12];
        for (let i = 0;i < res_mas.length;i++){
            let corx = res_mas[i][0]
            let cory = res_mas[i][1]
            if (contains(list,bd[corx][cory])){
                res[corx][cory] = 0
            }
            if (y == cory){
                if (bd[corx][cory] != 0){
                    res[corx][cory] = 0
                }
            }
            if (cory == y - 1){

                if (bd[corx][cory] == 0){
                    let a = last_step[0]
                    let b = last_step[1]
                    let c = last_step[2]
                    let d = last_step[3]
                    if (!((a == corx - 1)&&(b == cory)&&(c == corx + 1)&&(d == cory))){
                        res[corx][cory] = 0
                    }else{
                        res[corx][cory] = 1
                    }
                }
            }
            if (cory == y + 1){

                if (bd[corx][cory] == 0){
                    let a = last_step[0]
                    let b = last_step[1]
                    let c = last_step[2]
                    let d = last_step[3]
                    if (!((a == corx - 1)&&(b == cory)&&(c == corx + 1)&&(d == cory))){
                        res[corx][cory] = 0
                    }else{
                        res[corx][cory] = 1
                    }
                }
            }  
        }
        if ((x == 6)&&(bd[x - 1][y] != 0 || bd[x - 2][y] != 0)){
            res[x - 2][y] = 0;
        }
    }
    //черные пешки
    if (fig == 1){
        var list = [1,2,3,4,5,6];
        for (let i = 0;i < res_mas.length;i++){
            let corx = res_mas[i][0]
            let cory = res_mas[i][1]
            if (contains(list,bd[corx][cory])){
                res[corx][cory] = 0
            }
            if (y == cory){
                if (bd[corx][cory] != 0){
                    res[corx][cory] = 0
                }
            }
            if (cory == y - 1){

                if (bd[corx][cory] == 0){
                    let a = last_step[0]
                    let b = last_step[1]
                    let c = last_step[2]
                    let d = last_step[3]
                    if (!((a == corx + 1)&&(b == cory)&&(c == corx - 1)&&(d == cory))){
                        res[corx][cory] = 0
                    }else{
                        res[corx][cory] = 1
                    }
                }
            }
            if (cory == y + 1){

                if (bd[corx][cory] == 0){
                    let a = last_step[0]
                    let b = last_step[1]
                    let c = last_step[2]
                    let d = last_step[3]
                    if (!((a == corx + 1)&&(b == cory)&&(c == corx - 1)&&(d == cory))){
                        res[corx][cory] = 0
                    }else{
                        res[corx][cory] = 1
                    }
                }
            }            
        }
        try{
        if ((x == 6)&&(bd[x + 1][y] != 0 || bd[x + 2][y] != 0)){
            res[x + 2][y] = 0;
        }
        }catch{

        }
    }

    //ладья
    if (fig % 6 == 4){
        for (let i = 0;i < res_mas.length ;i++){
            let xc = res_mas[i][0]
            let yc = res_mas[i][1]
            if ((is_figure_on_line(x,y,xc,yc,bd))&&((div(bd[xc][yc],7) != div(bd[x][y],7))||bd[xc][yc] == 0)){
                res[xc][yc] = 1
            }else{
                res[xc][yc] = 0
            }
        }
    }
    //конь и король
    if ((fig % 6 == 3)||(fig % 6 == 0)) {
        for (let i = 0; i < res_mas.length;i++){
            let xc = res_mas[i][0]
            let yc = res_mas[i][1]
            if ((div(bd[xc][yc],7) == div(fig,7))&&(bd[xc][yc] != 0)){
                res[xc][yc] = 0
            }
        }


    }
    // слон
    if ( fig % 6 == 2){
        for (let i = 0; i < res_mas.length;i++){
            let xc = res_mas[i][0]
            let yc = res_mas[i][1]
            if ((div(bd[xc][yc],7) == div(fig,7))&&(bd[xc][yc] != 0)||!(is_figure_on_line(xc,yc,x,y,bd))){
                res[xc][yc] = 0
            }
        }
    }
    //ферзь
    if ( fig % 6 == 5){
        for (let i = 0; i < res_mas.length;i++){
            let xc = res_mas[i][0]
            let yc = res_mas[i][1]
            if ((div(bd[xc][yc],7) == div(fig,7))&&(bd[xc][yc] != 0)||!(is_figure_on_line(xc,yc,x,y,bd))){
                res[xc][yc] = 0
            }
        }
    }


    if(fig  == 12){
          if (is_figure_on_line(7,7,7,4,bd)&& w_castles[1] == 0 && w_king_steps == 0){
            res[7][6] = 1
          }
          if (is_figure_on_line(7,0,7,4,bd)&& w_castles[0] == 0 && w_king_steps == 0){
            res[7][2] = 1
          }
    }


    if(fig  == 6){
        if (is_figure_on_line(0,7,0,4,bd) && b_castles[1] == 0 && b_king_steps == 0){
          res[0][6] = 1
        }
        if (is_figure_on_line(0,0,0,4,bd) && b_castles[0] == 0 && b_king_steps == 0){
          res[0][2] = 1
        }
    }

    //проверка на шах
    // for (let i = 0;i < res_mas.length;i++){
    //     bd[x][y] = 0
    //     bd[res_mas[i][0]][res_mas[i][1]] = fig 
    //     if(check_it(bd,w_k_coords,b_k_coords)[0] == 1 && w_b_step % 2 == 1){
    //         res[res_mas[i][0]][res_mas[i][1]] = 0
    //     }
    // }
    res[x][y] = 0
    return res
}

//функция проверки элемента в массиве
function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}


function get_coords(res){
    var out = []
    var count = 0
    for (const [index, element] of res.entries()){
        for (const [index1, element1] of element.entries()){
            if (element1 == 1){
                out[count] = [index,index1]
                count += 1
            }
        } 
    }
    return out
}