import { h, Fragment } from 'preact';
import { Exit } from '../buttons/Exit';
import './modals.css';
export function LoadSuccess({ message, onClose }) {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Load parameters from file</h2>
        <h3>{message}</h3>
        <div onClick={onClose}>
        <Exit />
        </div>
      </div>
    </div>
  );
}