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
        return currentPlayer === this.playerX ? this.playerO : this.playerX;
    }

    addPlayerMoveToBoard = (player, position) => {
        this.board[position[0]][position[1]] = player;
    }

    isWinner = (player) => {
        for(let i = 0; i < this.board.length; i++){
            if(this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player){
                return true;
            }
        }
        for(let i = 0; i < this.board.length; i++){
            if(this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player){
                return true;
            }
        }

    }
}

module.exports = {
    TicTacToe
}