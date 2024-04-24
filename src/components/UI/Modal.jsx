import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open, className = '', onClose }) => {
  let css =
    'bg-lightGray rounded border-none shadow-black drop-shadow-md p-4 w-[80%] max-w-2xl animate-fadeSlidUp backdrop:bg-black/70 ' +
    className;

  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) modal.showModal();

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={css} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal'),
  );
};

export default Modal;
