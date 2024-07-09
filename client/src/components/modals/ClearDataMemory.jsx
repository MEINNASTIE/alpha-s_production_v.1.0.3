import { h, Fragment } from 'preact';
import { Delete } from '../buttons/Delete';
import './modals.css';
export function ClearDataMemory({ showModal, onClose }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Confirmation to wipe all data files at once</h2>
        <p>Proceed with caution!</p>
        <div onClick={onClose}>
        <Delete />
        </div>
      </div>
    </div>
    </div>
  );
}