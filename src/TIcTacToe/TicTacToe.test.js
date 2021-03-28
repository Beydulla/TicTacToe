const { describe, test, expect } = require('@jest/globals');
const { TicTacToe } = require('./tictactoe');

describe("Tests TicTacToe Game", () => {
    describe("Tests for validation of TicTacToe class", () => {
        const game = new TicTacToe();
        test("Expect Board class to have playerX with value X", () => {
            expect(game.playerX).toEqual("X");
        });
        test("Expect TicTacToe class to have playerO with value O", () => {
            expect(game.playerO).toEqual("O");
        });
        test("Expect TicTacToe class to have 3x3 board array with space characters for each element ", () => {
            const expectedBoard = [ [' ', ' ', ' '],
                                    [' ', ' ', ' '],
                                    [' ', ' ', ' ']]
            expect(game.board).toEqual(expectedBoard);
        });
        test("Expect TicTacToe class to draw an empty board in the beginning", () => {
            const expectedBoard = " | | \n-+-+-\n | | \n-+-+-\n | | ";
            expect(game.drawBoard(game.board)).toEqual(expectedBoard);
        });

        describe("Tests for getting random position for next move", () => {
            const game = new TicTacToe();
            test("Expect TicTacToe object to generate random position for the next move", () => {
                const position = game.randomPosition();
                expect(position[0]).toBeGreaterThanOrEqual(0)
                expect(position[0]).toBeLessThanOrEqual(2)
                expect(position[1]).toBeGreaterThanOrEqual(0)
                expect(position[0]).toBeLessThanOrEqual(2)
            });

            test("Expect TicTacToe object regenerate a new position if generated one is not empty in the board", () => {
                game.board = [['X', 'X', 'O'], ['X', 'O', ' '], ['O', 'X', 'O']];
                expect(game.randomPosition()).toEqual([1, 2])
            });
        });

        describe("Tests for finding next player", () => {
            test("Expect next player to be O when previous one was X", () => {
                expect(game.nextPlayer("X")).toEqual("O");
            });
            test("Expect next player to be X when previous one was O", () => {
                expect(game.nextPlayer("O")).toEqual("X");
            });
        });

    });
    describe("Test for updating the board with player's move", () => {
        test("Expect board to be updated with given player and position", () => {
            const game = new TicTacToe();
            game.addPlayerMoveToBoard("X", [1, 1]);
            expect(game.board[1][1]).toEqual("X")
        });
    });
})
