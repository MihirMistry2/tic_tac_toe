import { motion } from 'framer-motion';

const Turn = ({ turn }) => {
    return (
        <motion.div className="players-turn-container" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { delay: 2 } }}>
            <div className="option x">
                {turn === 'x' ? <motion.span layoutId="selected" transition={{ duration: 0.1 }} className="active" /> : null}
                <span className="icon x"></span>
            </div>
            <div className="option o">
                {turn === 'o' ? <motion.span layoutId="selected" transition={{ duration: 0.1 }} className="active" /> : null}
                <span className="icon o"></span>
            </div>
        </motion.div>
    );
};
export default Turn;
