const canvas = document.getElementById('checkerboard');
const ctx = canvas.getContext('2d');
const size = 8; // 8x8 棋盤
const cellSize = canvas.width / size;

// 0: 空地, 1: 紅色, 2: 黑色
let board = [
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

function drawBoard() {
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            // 繪製格子
            ctx.fillStyle = (r + c) % 2 === 0 ? '#ecf0f1' : '#95a5a6';
            ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);

            // 繪製棋子
            let piece = board[r][c];
            if (piece !== 0) {
                ctx.beginPath();
                ctx.arc(c * cellSize + cellSize/2, r * cellSize + cellSize/2, cellSize/2.5, 0, Math.PI * 2);
                ctx.fillStyle = piece === 1 ? '#e74c3c' : '#2c3e50';
                ctx.fill();
                ctx.strokeStyle = "white";
                ctx.stroke();
            }
        }
    }
}

drawBoard();
// 這裡後續可以加入 addEventListener('click', ...) 來處理移動邏輯