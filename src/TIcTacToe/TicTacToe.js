class TicTacToe {
    constructor() {
        this.playerX = 'X';
        this.playerO = 'O';
        this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    }

    drawBoard = () => {
        const board = this.board;
        return  board[0][0] + "|" + board[0][1] + "|" + board[0][2] + "\n-+-+-\n" +
                board[1][0] + "|" + board[1][1] + "|" + board[1][2] + "\n-+-+-\n" +
                board[2][0] + "|" + board[2][1] + "|" + board[2][2];
    }

    randomPosition = () => {
        return [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];

    }
}

module.exports = {
    TicTacToe
}