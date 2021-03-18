# Tic Tac Toe
## How to play
Run The backend and frontend and navigate to `http://localhost:4200`.<br>
There has to be an agreement between 2 users on who starts.`X` is the starting player.<br>
Click on a field and when you're ready click submit, then it's the opponents turn.<br>
The game will let both players know when the game is over with a snack bar.

## Decisions made
Because of the limited time I simplified the game.<br>
Only 1 game can be played at a time<br>
There is no check whether more than 2 players are logged in a room<br>
There is no realtime update of the board, but instead the frontend sends GET request every half a second.
A better solution would be to use websockets or a realtime database like Firebase.<br>
The backend doesn't assign a sign to the player, the users have to do that themselves.
One way to do that would be by storing the IP address.
