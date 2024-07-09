// This is a special parameter component that defines chamber paramteres for Alpha-S. 
// Each specific parameter should be defined accordingly using this component. 
// Many others may be built upon this one. 
// Do not forget to import ExampleComponent in a file you want to use this component in.

import { h, Fragment } from 'preact';
import { SaveModals } from '../buttons/Save_modals';
import { Exit } from '../buttons/Exit';
import './reusable.css';

const ParameterWrapper = ({ title, numerical, children }) => (
    <div className="parameter_wrapper">
        <div className="parameter_box">
           <h2>{title}</h2>
           <p>{numerical}</p> 
        </div>
        <div className="parameter_content">
            {children}
        </div>
        <div className="parameter_reusable_buttons">
            <SaveModals />
            <Exit />
        </div>
    </div>
);

export default ParameterWrapper;

// An example on how to use the ParameterWrapper component in another component file

// <ParameterWrapper
//       title="Chamber contamination background"
//       numerical="A numerical value here"
//       >
//   <ExampleComponent />
//   <p>This is where your main content goes.</p> 
// </ParameterWrapper>

// notice: The css styles might have to be adjusted