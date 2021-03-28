##Kata Objective:
The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the
player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with
a draw.

The board format: \
x|x|x \
-+-+-  \
x|x|x \
-+-+-  \
x|x|x

## UAT scenarios:
- Game board creation

### Notes:
- TicTacToe class:
    - will have 2 players(X, O)
    - will have 3x3 array
    - array will have empty characters for each element
    - class will print the array with the required format.

- random position for next move
- check if the position is available on the board, if not then regenerate new one
- identify next player
- update the board with player's move
- draw the board with updated values and print it
- check winner 
  - vertical
  - horizontal 
  - right diagonal
  - left diagonal
  - return false if there is no winner

    
### Tech dept
- can players have different names? 
- can array size be different than 3x3 ?
