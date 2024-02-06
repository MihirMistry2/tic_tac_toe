import { motion } from 'framer-motion';

/**
 * This component renders the 'Play Again' button, on click game restart.
 * @param {Function} setItems Set items 'x' or 'o' state.
 * @returns {React.ReactElement} React element that renders a search input with a button.
 */
const PlayAgain = ({ setItems }) => {
    /**
     * On click restart game state.
     * @param {Event} e 
     */
    const onButtonClick = (e) => {
        setItems(Array(9).fill(''));
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
