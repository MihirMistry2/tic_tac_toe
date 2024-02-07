import { motion } from 'framer-motion';

/**
 * @typedef {Object} Props
 * @property {Function} setItems Set items 'x' or 'o' state.
 * @property {Function} setTurn Set Player's turn state.
 * @property {Function} setModalOpen Set modal open state.
 */
/**
 * This component renders the 'Play Again' button, on click game restart.
 * @param {Props} props 
 * @returns {React.ReactElement} React element that renders a search input with a button.
 */
const PlayAgain = ({ setItems, setTurn, setModalOpen }) => {
    /**
     * On click restart game state.
     * @param {Event} e
     */
    const onButtonClick = (e) => {
        setItems(Array(9).fill(''));
        setTurn('x');
        setModalOpen(false);
    };

    return (
        <div className="play-again-wrapper">
            <motion.div className="play-again-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} onClick={onButtonClick}>
                <span className="play-again-title">play again</span>
                <span className="play-again-icon"></span>
            </motion.div>
        </div>
    );
};
export default PlayAgain;
