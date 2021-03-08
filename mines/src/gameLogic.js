const createArray = (size, contentCallback) => {
    return Array(size).fill(0).map((_, index) => contentCallback(index));
};

const randomize = limit => {
    return parseInt(Math.random() * limit, 10);
};

const createBoard = (rols, cols) => {
    return createArray(rols, row => {
        return createArray(cols, col => ({
            row,
            col,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
        }));
    });
};

const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const cols = boar[0].length;
    let minesPlanted = 0;

    while (minesPlanted < minesAmount) {
        const rowSel = randomize(rows);
        const colSel = randomize(cols);
        if (! board[rowSel][colSel].mined) {
            board[rowSel][colSel].mined = true;
            minesPlanted++;
        }
    }
};

export const createMinedBoard = (rows, cols, minesAmount) => {
    const board = createBoard(rows, cols);
    spreadMines(board, minesAmount);
    return board;
};
