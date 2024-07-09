import { h, Fragment } from 'preact';
import './modals.css';
import { SaveModals } from '../buttons/Save_modals';
export function InitializeFrontend({ showModal, onClose }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Confirmation to initialize frontend</h2>
        <p>Proceed with caution!</p>
        <div onClick={onClose}>
        <SaveModals />
        </div>
      </div>
    </div>
    </div>
  );
}
