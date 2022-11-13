function show_p(x,y,fig){
    var res = can_move_to(x,y,fig);
    console.log('res= ',res,bd);
    pos_moves(x,y,fig,bd,res);
    console.log('res= ',res);
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
    console.log(bd);
    if (fig == 7){
        var list = [0,7,8,9,10,11,12];
        if (contains(list,bd[x - 1][y + 1])){
            res[x - 1][y + 1] = 0;
        }else{
            res[x - 1][y + 1] = 1;
        }
        if (contains(list,bd[x - 1][y - 1])){
            res[x - 1][y - 1] = 0;
        }else{
            res[x - 1][y - 1] = 1;
        }
        if (bd[x - 1][y] != 0){
            res[x - 1][y] = 0;
        }
        if ((x == 6)&&(bd[x - 1][y] != 0 || bd[x - 2][y] != 0)){
            res[x - 2][y] = 0;
        }
    }
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

