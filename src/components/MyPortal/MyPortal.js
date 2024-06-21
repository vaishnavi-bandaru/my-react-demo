import { useState } from "react";
import { createPortal } from "react-dom";
import "./MyPortal.css"


export default function MyPortal() {
  return (
    <>
      <div className="clipping-container" id="otherParent">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}

function NoPortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button className="portal-button" onClick={() => setShowModal(true)}>
          Show modal without a portal
        </button>
        {showModal && (
          <ModalContent onClose={() => setShowModal(false)} />
        )}
      </>
    );
  }

  function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    const otherParent = document.getElementById("otherParent")
    return (
      <>
        <button className="portal-button" onClick={() => setShowModal(true)}>
          Show modal using a portal
        </button>
        {showModal && createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          otherParent
        )}
      </>
    );
  }

function ModalContent({ onClose }) {
    return (
      <div className="modal">
        <div>I'm a modal dialog</div>
        <button className="portal-button-close" onClick={onClose}>Close</button>
      </div>
    );
  }