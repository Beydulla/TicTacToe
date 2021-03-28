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
        const position =[Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
        return this.board[position[0]][position[1]] !== " " ? this.randomPosition() : position;
    }

    nextPlayer = (currentPlayer) => {
        if(currentPlayer === this.playerX){
            return this.playerO;
        }
    }
}

module.exports = {
    TicTacToe
}