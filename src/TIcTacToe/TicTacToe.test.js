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
        });
    });
})
