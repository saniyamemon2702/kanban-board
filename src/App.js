import React from 'react';
import './App.css';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Board from './Components/Board';
import Editable from './UI/Editable';
import boardArray from './utils/data';
import { useState } from 'react';

function App() {

  // state for boards
  const [boards, setBoards] = useState(boardArray);

  // to add card
  const addCard = (title, boardId) => {
    // create a card object
    const card = {
      id: Date.now() + Math.random() * 2,
      title: title,
      tasks: [],
      description: "",
      labels: [],
      date: ""
    };

    // find the board
    const index = boards.findIndex((board) => board.id === boardId);
    if (index < 0) return;

    // add card to the board
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);

  };
  // to remove card
  const removeCard = (cardId, boardId) => {
    // find the board
    const bIndex = boards.findIndex((board) => board.id === boardId);
    if (bIndex < 0) return;

    // find the card in the board
    const cIndex = boards[bIndex].cards.findIndex((card) => card.id === cardId);
    if (cIndex < 0) return;

    // remove card from the board
    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);  
  
  }

  // add board
  const addBoard = (title) => { 
       
    setBoards(...boards, {
      id: Date.now() + Math.random() * 2,
      title: title,
      cards: []
    });
  }

 
  
  // remove board
  const removeBoard = (boardId) => {
    const tempBoards = boards.filter((board) => board.id !== boardId);
    
    setBoards(tempBoards);
  }

  return (
    <div className="App">

      <Navbar />
      {/* outer comtainer */}
      <div className='flex-1 w-full overflow-x-auto h-full p-10'>
        {/* board container */}
        <div className='flex min-w-fit gap-8 align-center'>
          {
            boards.map((board) => {
              return (
                <Board key={board.id} board={board} />
              )
            })
          }

          <div className='w-80'>

            <Editable text="Add Board" placeholder="Enter board title" onSubmit={(value)=>addBoard(value)}/>
          </div>
        </div>


      </div>
      <Footer />

    </div>
  );
}

export default App;
