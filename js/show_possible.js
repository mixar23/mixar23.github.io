function show_p(x,y,fig){
    var res = can_move_to(x,y,fig);
    console.log('res= ',res);
    var lazyloadImages = document.querySelectorAll("img.kkrug");
    let count = 0;
    for (const [index, element] of res.entries()){
        for (const [index1, element1] of element.entries()){
            if (element1 == 1){
                let img = lazyloadImages[count];
                img.style.left = 479 + 55 * index1 + 'px';
                img.style.top = 120 + 55 * index + 'px';
                img.style.opacity = 0.5;
                count += 1;

            }
        } 
    }
}
function clear_p(){
    var lazyloadImages = document.querySelectorAll("img.kkrug");
    lazyloadImages.forEach(function opac(i){
        i.style.opacity = 0;
    })
}

// function pos_moves(x0,y0,x,y,fig,bd){
//     var res = can_move_to(x,y,fig)
//     for (let i in res){
//         for (let l in i){

//         }
        
//     }
// }

