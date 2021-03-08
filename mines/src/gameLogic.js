const createArray = (size, contentCallback) => {
    return Array(size).fill(0).map((_, index) => contentCallback(index));
};

const randomize = limit => {
    return parseInt(Math.random() * limit, 10);
};

const createBoard = (rows, cols) => {
    return createArray(rows, row => {
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
    const cols = board[0].length;
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

const createMinedBoard = (rows, cols, minesAmount) => {
    const board = createBoard(rows, cols);
    spreadMines(board, minesAmount);
    return board;
};

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => ({... field}));
    });
};

const getNeighbors = (board, row, col) => {
    const neighbors = [];
    const rows = [row - 1, row, row + 1];
    const cols = [col - 1, col, col + 1];
    rows.forEach(r => {
        cols.forEach(c => {
            const isCurrent = r === row && c === col;
            const isValidRow = r >= 0 && r < board.length;
            const isValidCol = c >= 0 && c < board[0].length;
            if (isCurrent || ! isValidRow || ! isValidCol) {
                return;
            }
            neighbors.push(board[r][c]);
        });
    });
    return neighbors;
};

const safeNeighborhood = (board, row, col) => {
    const safes = (result, neighbor) => result && ! neighbor.mined;
    return getNeighbors(board, row, col).reduce(safes, true);
};

const openField = (board, row, col) => {
    const field = board[row][col];
    if (! field.opened) {
        field.opened = true;
        if (field.mined) {
            field.exploded = true;
        } else if (safeNeighborhood(board, row, col)) {
            getNeighbors(board, row, col)
                .forEach(n => openField(board, n.row, n.col));
        } else {
            const neighbors = getNeighbors(board, row, col);
            field.nearMines = neighbors.filter(n => n.mined).length;
        }
    }
};

const fields = board => [].concat(...board);

const hasExplosion = board => !! fields(board)
    .filter(f => f.exploded).length;

const pending = field => (field.mined && ! field.flagged) ||
    (! field.mined && ! field.opened);

const wonGame = board => ! fields(board).filter(pending).length;

const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true);

const toggleFlag = (board, row, col) => {
    const field = board[row][col];
    field.flagged = ! field.flagged;
};

const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length;

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hasExplosion,
    wonGame,
    showMines,
    toggleFlag,
    flagsUsed,
};
