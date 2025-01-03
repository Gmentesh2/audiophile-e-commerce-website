/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from "./checkout-modal.module.css";
import Modal from "react-modal";
import { useContext } from "react";
import { SelectedProductsContext } from "../../../../context/SelectedProductsContext";


type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
      padding: "20px"
    },
    content: {
      width: "540px",
      height: "500px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    },
  
  };

const CheckoutModal = ({ isOpen, setIsOpen }: Props) => {
    const navigate = useNavigate()
      const context = useContext(SelectedProductsContext);
      console.log(context?.selectedItems)
    
  return (
    <div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
        // overlayClassName={"cart-modal-overlay"}
      >
        <h2>giorgi</h2>
        <button className="btn" onClick={() => {
            navigate("/")
            setIsOpen(false)
        }}>Back to home</button>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
