import PlayAgain from './components/PlayAgain/index';
import './sass/App.scss';

const App = () => {
    return (
        <div className="main-wrapper">
            <div className="title-wrapper">
                <h1>tic tac toe</h1>
            </div>
            <div className="game-container">
                <PlayAgain />
            </div>
        </div>
    );
};
export default App;
