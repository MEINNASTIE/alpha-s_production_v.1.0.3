import { h, Fragment } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { Save } from '../../buttons/Save'
import PumpFlow from '../../progress_bar/Pump_Flow'
import './settings.css'
import { SaveSuccess } from '../../modals/Warning_three';
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import { TranslateContext } from '@denysvuika/preact-translate';
export function Measure() {
    const [dateTime, setDateTime] = useState(getCurrentDateTime());
    const [radonBackground, setRadonBackground] = useState('-24');
    const [radonBackgroundError, setRadonBackgroundError] = useState(''); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { setActiveNav } = useNavStore();
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [isSaveVisible, setIsSaveVisible] = useState(true);
    const { t } = useContext(TranslateContext);

    const handleNavChange = (navItem) => {
        setActiveNav(navItem);
    }

    const handleModalClick = () => {
        setIsModalVisible(true);
    };
      
    const handleModalClose = () => {
        setIsModalVisible(false);
        setIsSaveVisible(false);
    };

    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value);
    };

    const handleRadonBackgroundChange = (event) => {
        const value = event.target.value;
        setIsFormChanged(true);
        setRadonBackground(value);
        if (!/^[-+]?[0-9]*$/.test(value)) {
            setRadonBackgroundError('Please enter a numerical value');
        } else {
            setRadonBackgroundError('');
        }
    };

    // later for data 
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleTimeFormChange = (event) => {
        handleDateTimeChange(event);
        setIsFormChanged(true);
    }

    return (
        <>
       <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <SecondaryNav />
        <div class="measure_box">
            <div>
                <h3>{t('time_settings')}</h3>
                <form>
                    <div>
                        <input type="radio" id="use" name="time" class="radio" onChange={() => setIsFormChanged(true)} checked/> {t('use')}
                        <input type="datetime-local" value={dateTime} onChange={ handleTimeFormChange}className="text" />
                    </div>
                    <div>
                        <input type="radio" id="pc_date_time" name="time" class="radio" onChange={() => setIsFormChanged(true)} /> {t('use_pc')}
                    </div>
                </form>
            </div>  
            <div>
                <h3>{t('pump_flow')}</h3>
                <div onChange={() => setIsFormChanged(true)}>
                <PumpFlow />
                </div>
            </div>
            <div>
                <h3>{t('measuring_cycle_and_mode')}</h3>
                <form>
                    <span>
                        <input id="10min" type="radio" name="measure" class="radio" onChange={() => setIsFormChanged(true)}  checked/> <p>10 min {t('diffusion_mode')}</p>  
                    </span>
                    <span>
                        <input id="60min" type="radio" name="measure" class="radio" onChange={() => setIsFormChanged(true)}  />
                        <p>60 min {t('diffusion_mode')}</p> 
                    </span>
                    <span>
                        <input id="1min" type="radio" name="measure" class="radio" onChange={() => setIsFormChanged(true)}  /> 
                        <p>1 min {t('flow_mode')}</p> 
                    </span>
                    <span>
                        <input  id="10min" type="radio" name="measure" class="radio" onChange={() => setIsFormChanged(true)}  /> 
                        <p>10 min {t('flow_mode')}</p>   
                    </span>
                </form>
            </div>
          
            <div>
                <div>
                    <h3>{t('unit_radon')}</h3>  
                    <form>
                        <span>
                            <input id="bq" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}  checked/> 
                            <p>Bq/m&#179;</p>
                        </span>
                        <span>
                            <input id="ci" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}  /> 
                            <p>Ci/I</p> 
                        </span>
                    </form> 
                </div>
                <div>
                    <h3>{t('unit_pressure')}</h3>
                    <form>
                        <span>
                           <input id="mbar" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}  checked/> 
                           <p>mbar</p>
                        </span>
                        <span>
                          <input id="" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}  /> <p>hPa</p>  
                        </span>
                    </form> 
                </div>
                <div>
                    <h3>{t('unit_temperature')}</h3>
                    <form>
                        <span>
                           <input id="radio" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}  checked/> 
                           <p>&#176;C</p> 
                        </span>
                        <span>
                            <input id="radio" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                            <p>&#176;F</p>
                        </span>
                    </form> 
                </div>
            </div>
            <div>
                <h3>{t('radon_background')}</h3>
                <form onSubmit={handleSubmit}>
                        <span>
                            <input type="text" value={radonBackground} onChange={handleRadonBackgroundChange} className="text" />
                            <p>Bq/m&#179;</p>
                        </span>
                        {radonBackgroundError && <span style={{ color: 'red' }}>{radonBackgroundError}</span>}
                </form>
            </div>
        </div> 
        <div className="action_buttons">
        {isFormChanged && isSaveVisible &&
            <div onClick={handleModalClick}>
            <Save />
            </div>
        }
            {isModalVisible && <SaveSuccess showModal={isModalVisible} onClose={handleModalClose} />}
        </div>
        </div>
        <FooterAlpha />
        </>
    )
}