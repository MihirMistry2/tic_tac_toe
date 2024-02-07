import { motion } from 'framer-motion';
import BackdropFilter from '../BackdropFilter/index';
import PlayAgain from '../PlayAgain';

/**
 * @typedef {Object} Props
 * @property {Function} setItems Set items 'x' or 'o' state.
 * @property {Function} setTurn Set Player's turn state.
 * @property {Function} setModalOpen Set modal open state.
 */
/**
 * Modal component for displaying a winner/no winner message on top of the current page.
 * @param {Props} props
 * @returns {React.ReactElement} React element that renders a search input with a button.
 */
const Modal = ({ setItems, setTurn, setModalOpen }) => {
    const dropIn = {
        hidden: { y: '-100vh', opacity: 0 },
        visible: {
            y: '0',
            opacity: 1,
            transition: { duration: 0.5, type: 'spring', damping: 25, stiffness: 500 }
        },
        exit: { y: '100vh', opacity: 0 },
    };
    const onModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <BackdropFilter>
            <motion.div className="modal" variants={dropIn} initial="hidden" animate="visible" exit="exit" onClick={onModalClick}>
                <PlayAgain setItems={setItems} setTurn={setTurn} setModalOpen={setModalOpen} />
            </motion.div>
        </BackdropFilter>
    );
};
export default Modal;
