import { h, Fragment } from 'preact';
import { Exit } from '../buttons/Exit';
import './modals.css';
export function InitializeSuccess({ showModal, onClose }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Initialize frontend</h2>
        <p>Device was successfully initialized!</p>
        <div onClick={onClose}>
        <Exit />
        </div>
      </div>
    </div>
    </div>
  );
}