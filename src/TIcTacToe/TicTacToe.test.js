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
    });
})
