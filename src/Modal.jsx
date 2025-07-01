import "./Modal.css";
import { useState } from "react";

const Modal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {totalImages > 1 && (
          <>
            <button className="arrow left" onClick={prevImage}>
              ❮
            </button>
            <button className="arrow right" onClick={nextImage}>
              ❯
            </button>
          </>
        )}

        <div className="image-container">
          <img
            src={images[currentIndex]}
            alt={`Preview ${currentIndex}`}
            className="modal-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
