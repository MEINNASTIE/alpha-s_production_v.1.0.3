import { h, Fragment } from 'preact';
import Loader from '../loader/Loader';
import './modals.css';
import { SaveModals } from '../buttons/Save_modals';
export function FirmwareUpdate({ showModal, onClose }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Alpha-S validation for an update</h2>
        <div>
           <Loader />  
        </div>
        <div onClick={onClose}>
        <SaveModals />
        </div>
      </div>
    </div>
    </div>
  );
}