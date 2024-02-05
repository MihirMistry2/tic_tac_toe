import { motion } from 'framer-motion';

const PlayAgain = () => {
    return (
        <div className="play-again-wrapper">
            <motion.div className="play-again-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <span className="play-again-title">play again</span>
                <span className="play-again-icon"></span>
            </motion.div>
        </div>
    );
};
export default PlayAgain;
