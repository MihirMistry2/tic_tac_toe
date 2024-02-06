import { motion } from 'framer-motion';
import XIcon from '../../assets/icons/x.svg';
import OIcon from '../../assets/icons/o.svg';

/**
 * This component creates a grid container that is used for rendering 'x' or 'o'.
 * @param {string[]} items Player's selected values.
 * @param {Function} setItems Set items 'x' or 'o' state.
 * @param {string} turn Player's turn state.
 * @param {Function} setTurn Set Player's turn state.
 * @param {Function} checkWinner Check winner.
 * @returns {React.ReactElement} React element that renders a search input with a button.
 */
const Square = ({ items, setItems, turn, setTurn, checkWinner }) => {
    const parentVariant = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.1, staggerChildren: 0.2 },
        },
    };
    const childrenVariant = {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
    };

    /**
     * To update the player's turn state and display an 'X' or 'O' icon.
     * @param {Evant} e
     */
    const onItemClick = (e) => {
        try {
            const $target = e.currentTarget;
            const index = Number($target.id);
            items[index] = turn;
            setItems([...items]);
            checkWinner();
            setTurn((prev) => (prev === 'x' ? 'o' : 'x'));
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <motion.div className="grid-container" initial="initial" animate="animate" variants={parentVariant}>
            {items.map((item, i) => (
                <motion.div key={i} id={i} className="grid-item" variants={childrenVariant} onClick={onItemClick}>
                    {item === 'x' ? <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} src={XIcon} alt="x" width="80px" height="80px"/> : null}
                    {item === 'o' ? <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} src={OIcon} alt="o" width="60px" height="60px"/> : null}
                </motion.div>
            ))}
        </motion.div>
    );
};
export default Square;
