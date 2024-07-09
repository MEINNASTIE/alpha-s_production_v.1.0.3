import { h, Fragment } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { Save } from '../../buttons/Save'
import './settings.css'
import { SaveSuccess } from '../../modals/Warning_three';
import VisibleEye from '../../../assets/eye-solid.svg';
import InvisibleEye from '../../../assets/eye-slash-solid.svg';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import useNavStore from '../../store/navStore';
import { FooterAlpha } from '../../layout/Footer_main';
import { TranslateContext } from '@denysvuika/preact-translate';
export function WiFiAP() {
    const { t } = useContext(TranslateContext);
    // fake states
    const [hostName, setHostName] = useState('AS000123');
    const [deviceMode, setDeviceMode] = useState('AS000123_ACCESS_POINT');
    const [deviceModePassword, setDeviceModePassword] = useState('1264528');
    const [radonBackgroundError, setRadonBackgroundError] = useState('');
    const [ipSegments, setIpSegments] = useState({ ip1: '192', ip2: '168', ip3: '45', ip4: '1' });
    const [maskSegments, setMaskSegments] = useState({ mask1: '192', mask2: '168', mask3: '45', mask4: '2' });
    // fake states end
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [deviceModePasswordVisible, setDeviceModePasswordVisible] = useState(false);
    const { setActiveNav } = useNavStore();
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [isSaveVisible, setIsSaveVisible] = useState(true);

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

    const handleHostNameChange = (event) => {
        setHostName(event.target.value);
        setIsFormChanged(true);
    };
    const handleDeviceModeChange = (event) => {
        setDeviceMode(event.target.value);
        setIsFormChanged(true);
    };
    
    const handleDeviceModePasswordChange = (e) => {
        setDeviceModePassword(e.target.value);
        setIsFormChanged(true);
    };

    const togglePasswordVisibility = () => {
        setDeviceModePasswordVisible(!deviceModePasswordVisible);
    };

    const handleSegmentChange = (event, setter, segment) => {
        const value = event.target.value;
        setIsFormChanged(true);

        if (/^\d{0,3}$/.test(value) && value <= 255) {
            setter(prev => ({ ...prev, [segment]: value }));
            setRadonBackgroundError('Please enter a numerical value');
        } else {
            setRadonBackgroundError('');
        }
    };

    return (
        <>
       <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <SecondaryNav/>
        <div className="wifi_box_main">
        <div class="wifi_box wifiap_box">
        <div class="ipv6_box">
            <h3>{t('wi_fi_mode')}</h3>  
            <form>
                <span>
                    <input id="device" type="radio" name="mode" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>{t('device')}</p>
                </span>
                <span>
                    <input id="access_point" type="radio" name="mode" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>{t('access')}</p> 
                </span>
            </form>       
        </div>
        <div>
            <form className="special_wifi_form">
                <h3>{t('device_mode_ssid')}</h3>
                <input type="text" name="device_mode" id="wifi_name" class="text" value={deviceMode} onChange={handleDeviceModeChange}>
                </input>
                <h3>{t('password')}</h3>
                <div class="password_special_wifiap">
                    <input
                        type={deviceModePasswordVisible ? 'text' : 'password'}
                        name="device_mode"
                        id="password_ssid"
                        className="text"
                        value={deviceModePassword}
                        onChange={handleDeviceModePasswordChange}
                    />
                    <button type="button" onClick={togglePasswordVisibility} class="toggle_visibility_button">
                        <img src={deviceModePasswordVisible ? VisibleEye : InvisibleEye} alt="Toggle visibility" style={{ width: '20px', height: '20px' }} />
                    </button>
                </div>
                <h3>{t('password')}</h3>
                <input type="password" name="device_mode" id="password_ssid" class="text" value={deviceModePassword} onChange={handleDeviceModePasswordChange}/>
            </form>
         </div>  
         </div>
         <div class="wifi_box wifiap_box">
         <div> 
         <div>
            <h3>{t('host_name')}</h3>
            <form className="input_special special_wifi_form">
                <input id="text" type="text" name="text" class="text" value={hostName} onChange={handleHostNameChange}></input>
            </form>
          </div>
          <div>
            <h3>{t('access_point_ip_address')}</h3>
                <form name="wifiap" onChange={() => setIsFormChanged(true)}>
                        <input type="text" value={ipSegments.ip1} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip1')} className="text" name="ip" maxLength="3" />
                        <input type="text" value={ipSegments.ip2} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip2')} className="text" name="ip" maxLength="3" />
                        <input type="text" value={ipSegments.ip3} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip3')} className="text" name="ip" maxLength="3" />
                        <input type="text" value={ipSegments.ip4} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip4')} className="text" name="ip" maxLength="3" />
                </form>
            <h3>{t('client_ip_address')}</h3>
                <form name="wifiap" onChange={() => setIsFormChanged(true)}>
                        <input type="text" value={maskSegments.mask1} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask1')} className="text" maxLength="3" name="ip" />
                        <input type="text" value={maskSegments.mask2} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask2')} className="text" maxLength="3" name="ip" />
                        <input type="text" value={maskSegments.mask3} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask3')} className="text" maxLength="3" name="ip" />
                        <input type="text" value={maskSegments.mask4} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask4')} className="text" maxLength="3" name="ip" />
                </form>
            </div>
            </div>
            <div class="ipv6_box">
            <h3>{t('disable_ad_hoc_ap_mode')}?</h3>  
            <form>
                <span>
                    <input id="yes" type="radio" name="mode" class="radio" onChange={() => setIsFormChanged(true)} checked/> 
                    <p>{t('yes')}</p>
                </span>
                <span>
                    <input id="no" type="radio" name="mode" class="radio" onChange={() => setIsFormChanged(true)}/> 
                    <p>{t('no')}</p> 
                </span>
            </form>       
        </div>
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