//packages
import { motion } from 'framer-motion';

//local
import './CustomModal.css';

/**
 * MODAL USED FOR SUCCESS AND ERROR MESSAGES
 */
const CustomModal = ({ children }) => {
    return (
        <motion.div className="custom-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div 
                className="custom-modal-content"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            >
                { children }
            </motion.div>
        </motion.div>
    )
}

export default CustomModal;

