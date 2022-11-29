function check_it(bd,w_k_coords,b_k_coords){
    var resout = [0,0]
    for (let i = 0; i < 8;i++){
        for (let l = 0;l < 8;l++){
            if(bd[i][l] != 0){
                let pos_steps = can_move_to(i,l,bd[i][l])
                pos_steps = pos_moves(i,l,bd[i][l],bd,pos_steps)
                let h_coords = get_coords(pos_steps)
                for (let index = 0;index < h_coords.length;index++){
                    if (JSON.stringify(h_coords[index]) == JSON.stringify(w_k_coords)){
                        resout[0] = 1//шах белым
                    }
                    if(JSON.stringify(h_coords[index]) == JSON.stringify(b_k_coords)){
                        resout[1] = 1//шах to black
                    }
                }
            }
        }
    }
    return resout
}