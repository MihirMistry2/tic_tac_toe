import { useState } from 'react';
import PlayAgain from './components/PlayAgain';
import Square from './components/Square';
import './sass/App.scss';

const App = () => {
    /** @type {[items: string[], setItems: Function]}  */
    const [items, setItems] = useState(Array(9).fill(''));
    /** @type {[turn: string, setTurn: Function]} */
    const [turn, setTurn] = useState('x');

    return (
        <div className="main-wrapper">
            <div className="title-wrapper">
                <h1>tic tac toe</h1>
            </div>
            <div className="game-container">
                <PlayAgain setItems={setItems} />
                <Square items={items} setItems={setItems} turn={turn} setTurn={setTurn}/>
            </div>
        </div>
    );
};
export default App;
