import React, { useState, useEffect } from "react";
import "./../App.scss";

const initMatrix = [];

function AppTicTacToe() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
	const [currentPlayer, setCurrentPlayer] = useState("o");
	const [selR, setSelR] = useState(null);
	const [selC, setSelC] = useState(null);
	const [winner, setWinner] = useState(false);
	const [reset, setReset] = useState(false);

  useEffect(() => {
		setWinner(false);
		setSelC(null);
		setSelR(null);
    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
	}, [reset]);
	
	function squareClick(c, r) {
		if(!matrix[c][r] && !winner) {
			setSelC(r);
			setSelR(c);
			let nextPlayer = currentPlayer === "x" ? "o" : "x";
			setCurrentPlayer(nextPlayer);
			const matrixCopy = [...matrix];
			matrixCopy[c][r] = nextPlayer;
			setMatrix(matrixCopy);
		}
	}	

	function isWinner() {
		let vertical = true;
		let horizontal = true;
		let diagonal1 = true;
		let diagonal2 = true;

		if(selC === null || selR === null) {
			return;
		}

		for(let i=0; i<matrixSize; i++) {
			if(matrix[i][selC] !== currentPlayer) {
				vertical = false;
			}
			if(matrix[selR][i] !== currentPlayer) {
				horizontal = false;
			}
			if(matrix[i][i] !== currentPlayer) {
				diagonal1 = false;
			}
			if(matrix[i][matrixSize - i - 1] !== currentPlayer) {
				diagonal2 = false;
			}
		}
		if( vertical || horizontal || diagonal1 || diagonal2) {
			setWinner(true);
		}
	}

	useEffect(() => {
		if(!winner) {
			isWinner();
		}
	})

	function resetGame() {
		setReset(!reset);
	}

  return (
    <div className="App">
      <header className="App-header">
				<button onClick={resetGame}>
					Reset Game
				</button>
				<div>
					{
						matrix.map((val, c) => (
							<div className="c">
								{val.map((val1, r) =>(
									<div onClick={()=>{squareClick(c,r)}} className="r">
										{val1}
									</div>
								))}
							</div>
						))
					}
				</div>
				<h2>{winner ? `Player ${currentPlayer} is a winner` : ''}</h2>
			</header>
    </div>
  );
}

export default AppTicTacToe;
