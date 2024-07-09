import { h, Fragment } from 'preact'; 
import './reusable.css';
import ParameterWrapper from './Parameter_reusable';
import { NumericSingleValue } from './values/NumericSingleValue';
import { NumericMultipleValues } from './values/NumericMultipleValues';
import { NumericSingleValue_readOnly } from './values/NumericSingleValue_readOnly';
import { Enumeration } from './values/Enumeration';
import { Text } from './values/Text';
import { Text_readOnly } from './values/Text_readOnly';
import { BooleanGroupRW } from './values/BooleanGroup';
import { BooleanGroupROnly } from './values/BooleanGroup_readOnly';
import { IPAddress } from './values/IPAddress';

const ExampleComponent = () => {
    return (
        <>
        <ParameterWrapper
            title="Chamber contamination background"
            numerical="2001h">
            {/* <NumericSingleValue /> */}
            {/* <NumericMultipleValues /> */}
            {/* <NumericSingleValue_readOnly /> */}
            {/* <Enumeration /> */}
            {/* <Text /> */}
            {/* <Text_readOnly />  */}
            {/* <BooleanGroupRW /> */}
            {/* <BooleanGroupROnly /> */}
            <IPAddress />
        </ParameterWrapper>
        </>
    )
}

export default ExampleComponent;