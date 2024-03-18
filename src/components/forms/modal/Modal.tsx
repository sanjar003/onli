import React, { ReactNode } from "react";
import ReactDOM  from "react-dom";
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modalOverLay}>
      <div className={styles.modal}>
        <button className={styles.modalClose} onClick={onClose}>закрыть</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
