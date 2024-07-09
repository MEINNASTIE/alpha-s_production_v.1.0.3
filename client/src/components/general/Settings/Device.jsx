import { h, Fragment } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { Save } from '../../buttons/Save'
import DisplayContrast from '../../progress_bar/Display_Contrast'
import './settings.css'
import { SaveSuccess } from '../../modals/Warning_three';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import useNavStore from '../../store/navStore';
import { TranslateContext } from '@denysvuika/preact-translate';
export function DeviceSettings() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { setActiveNav } = useNavStore();
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [isSaveVisible, setIsSaveVisible] = useState(true);
    const { t } = useContext(TranslateContext);

    const handleNavChange = (navItem) => {
      console.log('Navigation changed to:', navItem);
      setActiveNav(navItem);
    }

    const handleModalClick = () => {
        setIsModalVisible(true);
    };
      
    const handleModalClose = () => {
        setIsModalVisible(false);
        setIsSaveVisible(false);
    };
    return (
    <>
    <HeaderAlpha />
    <div className="alpha_main">
      <MainNav onNavChange={handleNavChange}/>
      <SecondaryNav/>
    <div class="device_box">
        <div>
            <h3>{t('display_contrast')}</h3>
            <div onChange={() => setIsFormChanged(true)}>
               <DisplayContrast />  
            </div>
        </div>
        <div>
            <h3>{t('display_blacklight')}</h3>  
            <form>
                <span>
                    <input id="on" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>ON</p>
                </span>
                <span>
                    <input id="auto" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>AUTO</p> 
                </span>
                <span>
                    <input id="off" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>OFF</p> 
                </span>
            </form> 
        </div>
        <div>
        <h3>{t('measurement_data_on_display')}</h3>
        <form>
            <span>
                <input id="yes" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                <p>Yes</p>
            </span>
            <span>
                <input id="no" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                <p>No</p>  
            </span>
        </form> 
        </div>
        <div>
            <h3>{t('disable_keys')}?</h3>
            <form>
                <span>
                    <input id="yes" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>Yes</p> 
                </span>
                <span>
                    <input id="no" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>No</p>
                </span>
            </form> 
        </div>
        <div>
            <h3>{t('disable_usb')}?</h3>  
            <form>
                <span>
                    <input id="yes" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>Yes</p>
                </span>
                <span>
                    <input id="no" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>No</p> 
                </span>
            </form> 
        </div>
        <div>
            <h3>{t('measurement_data_on_login_page')}</h3>  
            <form>
                <span>
                    <input id="yes" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>Yes</p>
                </span>
                <span>
                    <input id="no" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>No</p> 
                </span>
            </form> 
        </div>
        <div>
            <h3>{t('disable_ssl_not_recommended')}! </h3>  
            <form>
                <span>
                    <input id="yes" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>Yes</p>
                </span>
                <span>
                    <input id="no" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>No</p> 
                </span>
            </form> 
        </div>
        <div>
            <h3>{t('file_format')}?</h3>  
            <form>
                <span>
                    <input id="upf2" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>UPF2</p>
                </span>
                <span>
                    <input id="txt" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>TXT</p> 
                </span>
            </form> 
        </div>
        {/* <div>
            <h3>Language</h3>  
            <form>
                <span>
                    <input id="english" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>English</p>
                </span>
                <span>
                    <input id="french" type="radio" name="unit_radon" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>French</p> 
                </span>
            </form> 
        </div> */}
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