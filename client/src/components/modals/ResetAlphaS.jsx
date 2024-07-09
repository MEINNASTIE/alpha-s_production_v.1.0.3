import { h, Fragment } from 'preact';
import './modals.css';
import { SaveModals } from '../buttons/Save_modals';
export function ResetAlphaS({ showModal, onClose }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Full Alpha-S reset</h2>
        <p>Proceed with caution!</p>
        <div onClick={onClose}>
        <SaveModals />
        </div>
      </div>
    </div>
    </div>
  );
}