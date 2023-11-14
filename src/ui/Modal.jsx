import { cloneElement, createContext, useContext, useState } from "react";
import Button from "./Button";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) return null;

  return createPortal(
    <div className=" fixed left-0 top-0 z-50 h-screen w-full bg-white bg-opacity-10  backdrop-blur-sm transition-all duration-500">
      <div
        ref={ref}
        className="fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform rounded-[30px] bg-white shadow-lg ring-2 ring-black ring-offset-2 ring-offset-white transition-all duration-500"
      >
        <Button onClick={close}>
          <span className="fixed right-6 text-xl">
            <HiXMark />
          </span>
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
