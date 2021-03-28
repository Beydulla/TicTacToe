class TicTacToe {
    constructor() {
        this.playerX = 'X';
        this.playerO = 'O';
        this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    }

    drawBoard = () => {
        return this.board[0][0] + "|" + this.board[0][1] + "|" + this.board[0][2] + "\n" +
            "-+-+-\n" +
            this.board[1][0] + "|" + this.board[1][1] + "|" + this.board[1][2] + "\n" +
            "-+-+-\n" +
            this.board[2][0] + "|" + this.board[2][1] + "|" + this.board[2][2];
    }
}

module.exports = {
    TicTacToe
}