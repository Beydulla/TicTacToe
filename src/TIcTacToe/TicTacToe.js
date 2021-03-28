class TicTacToe {
    constructor() {
        this.playerX = 'X';
        this.playerO = 'O';
        this.board = this.initBoard();
    }

    initBoard = () => {
     return [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
    }
}


module.exports = {
    TicTacToe
}