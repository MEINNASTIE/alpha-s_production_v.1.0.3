import { h, Fragment } from 'preact';
import { Exit } from '../buttons/Exit';
import './modals.css';
export function SaveSuccess({ showModal, onClose }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Successfully saved!</h2>
        <div onClick={onClose}>
        <Exit />
        </div>
      </div>
    </div>
    </div>
  );
}