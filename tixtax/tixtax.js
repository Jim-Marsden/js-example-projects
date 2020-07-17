
const board = {
    value: [[null, null, null], [null, null, null], [null, null, null]],
    setValue: function (top, left, mark) {
        if (board.value[top][left] == null) {
            board.value[top][left] = mark;
            console.log("setting");

        }
        else console.log("already set!");
    }

}

function board_buttons_onclick(top, left, mark, obj) {
    board.setValue(top, left, mark);
    obj.innerHTML = mark;

}
