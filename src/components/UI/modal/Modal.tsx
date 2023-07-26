import React, { FC } from "react";
import cl from "./modal.module.scss";

interface ModalProps {
  visible: boolean;
  setVisible: any;
  children: any;
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const modalActive = [cl.modal];
  if (visible) {
    modalActive.push(cl.active);
  }

  const modalContentActive = [cl.modalContent];
  if (visible) {
    modalContentActive.push(cl.active);
  }

  return (
    <div className={modalActive.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={modalContentActive.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
