import { motion } from 'framer-motion';
import BackdropFilter from '../BackdropFilter/index';
import PlayAgain from '../PlayAgain';

/**
 * @typedef {Object} Props
 * @property {string} winner 'x', 'o' or 'no' state.
 * @property {Function} setItems Set items 'x' or 'o' state.
 * @property {Function} setTurn Set Player's turn state.
 * @property {Function} setModalOpen Set modal open state.
 */
/**
 * Modal component for displaying a winner/no winner message on top of the current page.
 * @param {Props} props
 * @returns {React.ReactElement} React element that renders a search input with a button.
 */
const Modal = ({ winner, setItems, setTurn, setModalOpen }) => {
    const dropInMotion = {
        hidden: { y: '-100vh', opacity: 0 },
        visible: {
            y: '0',
            opacity: 1,
            transition: { duration: 0.5, type: 'spring', damping: 25, stiffness: 500 }
        },
        exit: { y: '100vh', opacity: 0 },
    };
    const winnerTitleMotion = {
        initial: { scale: 1, y: 100 },
        animate: {
            scale: 1,
            y: 0,
            transition: { y: { delay: 0.7 }, duration: 0.7 },
        },
    };
    const winnerIconMotion = {
        initial: { scale: 0 },
        animate: {
            scale: 1,
            transition: { delay: 1.3, duration: 0.2 },
        },
    };
    const playAgainBtnMotion = {
        initial: { scale: 0 },
        animate: {
            scale: 1,
            transition: { delay: 1.5, duration: 0.3 },
        },
    };
    const onModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <BackdropFilter>
            <motion.div className="modal" initial="hidden" animate="visible" exit="exit" variants={dropInMotion} onClick={onModalClick}>
                <motion.h1 className="title" initial="initial" animate="animate" variants={winnerTitleMotion}>
                    {winner === 'no' ? 'no winner 🙈' : 'winner 🥳'}
                </motion.h1>
                {winner === 'no' ? (
                    <motion.div className="icon-container no-winner" initial="initial" animate="animate" variants={winnerIconMotion}>
                        <div className="icon-x"></div>
                        <div className="icon-o"></div>
                    </motion.div>
                ) : (
                    <motion.div className="icon-container winner" initial="initial" animate="animate" variants={winnerIconMotion}>
                        <div className={`icon-winner ${winner}`}></div>
                    </motion.div>
                )}
                <motion.div className='btn-wrapper' initial="initial" animate="animate" variants={playAgainBtnMotion}>
                    <PlayAgain setItems={setItems} setTurn={setTurn} setModalOpen={setModalOpen} />
                </motion.div>
            </motion.div>
        </BackdropFilter>
    );
};
export default Modal;
