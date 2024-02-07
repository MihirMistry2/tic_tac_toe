import { motion } from 'framer-motion';

/**
 * Backdrop filter for applying graphical effects to the area behind a children's element.
 * @param {React.ReactDOM} children children DOM
 * @returns {React.ReactElement} React element that renders a search input with a button.
 */
const BackdropFilter = ({ children }) => {
    return (
        <motion.div className="backdrop-filter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    );
};
export default BackdropFilter;
