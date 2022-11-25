var sorted_ids = ['chess_figure_5_b','chess_figure_4_b','chess_figure_2_b','chess_figure_3_b','chess_figure_1_b','chess_figure_15_b','chess_figure_16_b','chess_figure_14_b','chess_figure_6_b','chess_figure_7_b','chess_figure_8_b','chess_figure_9_b','chess_figure_10_b','chess_figure_11_b','chess_figure_12_b','chess_figure_13_b','chess_figure_6','chess_figure_7','chess_figure_8','chess_figure_9','chess_figure_10','chess_figure_11','chess_figure_12','chess_figure_13','chess_figure_5','chess_figure_4','chess_figure_2','chess_figure_3','chess_figure_1','chess_figure_15','chess_figure_16','chess_figure_14'];

function Function_reset() {
    var top_s = 104;
    var left_s = 462;
    for(let i = 0; i < 8; i++){
        let element = document.getElementById(sorted_ids[i]);
        element.style.left = left_s  + 'px';
        element.style.top = top_s  +'px';
        left_s += 55;
    }
    left_s = 462;
    top_s += 55;
    for(let i = 8; i < 16; i++){
        let element = document.getElementById(sorted_ids[i]);
        element.style.left = left_s  + 'px';
        element.style.top = top_s  +'px';
        left_s += 55;
    }
    top_s = 433;
    left_s = 462;
    for(let i = 16; i < 24; i++){
        let element = document.getElementById(sorted_ids[i]);
        element.style.left = left_s  + 'px';
        element.style.top = top_s  +'px';
        left_s += 55;
    }
    top_s += 55;
    left_s = 462;
    for(let i = 24; i < 32; i++){
        let element = document.getElementById(sorted_ids[i]);
        element.style.left = left_s  + 'px';
        element.style.top = top_s  +'px';
        left_s += 55;
    }
    ybox = document.getElementById('cur_step');
    ybox.style.opacity = 0.0;
    ybox2 = document.getElementById('cur_step2');
    ybox2.style.opacity = 0.0;
    step_text.innerHTML = "white's turn";
    w_b_step = 0;
    black_figs = 0;
    white_figs = 0;
    last_step = [0,0,0,0];
    bd = [[4,3,2,5,6,2,3,4],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[7,7,7,7,7,7,7,7],[10,9,8,11,12,8,9,10]];
    w_king_steps = 0;//отслеживание ходил белый король иле нет
    b_king_steps = 0;//отслеживание ходил черный король или нет
    w_castles = [0,0];//отслеживание ходила ли белая ладья 
    b_castles = [0,0];//отслеживание ходила ли черная ладья
    id_place = [["chess_figure_5_b","chess_figure_4_b","chess_figure_2_b","chess_figure_3_b","chess_figure_1_b","chess_figure_15_b","chess_figure_16_b","chess_figure_14_b"],["chess_figure_6_b","chess_figure_7_b","chess_figure_8_b","chess_figure_9_b","chess_figure_10_b","chess_figure_11_b","chess_figure_12_b","chess_figure_13_b"],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],["chess_figure_6","chess_figure_7","chess_figure_8","chess_figure_9","chess_figure_10","chess_figure_11","chess_figure_12","chess_figure_13"],["chess_figure_5","chess_figure_4","chess_figure_2","chess_figure_3","chess_figure_1","chess_figure_15","chess_figure_16","chess_figure_14"]];
}
