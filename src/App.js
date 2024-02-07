import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PlayAgain from './components/PlayAgain';
import Square from './components/Square';
import Turn from './components/Turn';
import Modal from './components/Modal';
import './sass/App.scss';

const App = () => {
    /** @type {[items: string[], setItems: Function]}  */
    const [items, setItems] = useState(Array(9).fill(''));
    /** @type {[turn: string, setTurn: Function]} */
    const [turn, setTurn] = useState('x');
    /** @type {[modalOpen: boolean, setModalOpen: Function]} */
    const [modalOpen, setModalOpen] = useState(false);
    const checkWinner = () => {
        let winner = false;
        const winningCombos = [
            [0, 1, 2], [0, 3, 6], 
            [0, 4, 8], [1, 4, 7], 
            [3, 4, 5], [2, 5, 8], 
            [2, 4, 6], [6, 7, 8],
        ];
        const currentPlayerTurnCombos = items.reduce((previousValue, currentValue, currentIndex, array) =>
            previousValue.concat(currentValue === turn ? currentIndex : [])
        , []);
        for (let combos of winningCombos) {
            if (combos.every((num) => currentPlayerTurnCombos.includes(num))) winner = true;
        }
        if (winner || items.indexOf('') === -1) {
            setModalOpen(true);
        }
    };

    return (
        <div className="main-wrapper">
            <div className="title-wrapper">
                <h1>tic tac toe</h1>
            </div>
            <div className="game-container">
                <PlayAgain setItems={setItems} setTurn={setTurn} setModalOpen={setModalOpen} />
                <Square items={items} setItems={setItems} turn={turn} setTurn={setTurn} checkWinner={checkWinner} />
                <Turn turn={turn} />
            </div>
            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
                {modalOpen && <Modal setItems={setItems} setTurn={setTurn} setModalOpen={setModalOpen} />}
            </AnimatePresence>
        </div>
    );
};
export default App;
