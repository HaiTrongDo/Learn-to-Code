


let cell = "<table border='1' >"
let rows = 10;
let columns = 10;
const player1 = "X";
const player2 = "O";
let turn = player1;

for (let i = 0 ; i < rows ; i++) {
    cell = cell + "<tr";
    for (let j = 0; j < columns; j++) {
        cell = cell + `<td class='celldata${i}${j}' onclick='clickToCell(this)'> ` + "</td>"
    }

    cell = cell + "</tr>"
}
cell = cell + "</table>"
document.write(cell);

function clickToCell(x) {
    if (turn === player1) {
        x.innerText = player1;
        turn = player2;
    } else {
        x.innerText = player2;
        turn = player1;
    }
}
