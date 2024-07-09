import { h, Fragment } from 'preact';
import { useContext, useState } from 'preact/hooks';
import './settings.css';
import { Save } from '../../buttons/Save';
import { SaveSuccess } from '../../modals/Warning_three';
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import { TranslateContext } from '@denysvuika/preact-translate';
export function Ethernet() {
    const [dhcp, setDhcp] = useState(true);
    const [ipv6, setIpv6] = useState(true); 
    const [radonBackgroundError, setRadonBackgroundError] = useState('');
    const [isSaveVisible, setIsSaveVisible] = useState(true);
    const { t } = useContext(TranslateContext);

    // fake states
    const [ipSegments, setIpSegments] = useState({ ip1: '192', ip2: '168', ip3: '12', ip4: '214' });
    const [maskSegments, setMaskSegments] = useState({ mask1: '255', mask2: '255', mask3: '255', mask4: '0' });
    const [gatewaySegments, setGatewaySegments] = useState({ gateway1: '192', gateway2: '168', gateway3: '12', gateway4: '1' });
    const [hostName, setHostName] = useState('AS000123');
    // fake states end
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { setActiveNav } = useNavStore();
    const [isFormChanged, setIsFormChanged] = useState(false);

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

    const handleSegmentChange = (event, setter, segment) => {
        const value = event.target.value;

        if (/^\d{0,3}$/.test(value) && value <= 255) {
            setter(prev => ({ ...prev, [segment]: value }));
            setRadonBackgroundError('Please enter a numerical value');
        } else {
            setRadonBackgroundError('');
        }
    };

    const handleHostNameChange = (event) => {
        setHostName(event.target.value);
        setIsFormChanged(true);
    };

    return (
            <>
           <HeaderAlpha />
            <div className="alpha_main">
                <MainNav onNavChange={handleNavChange} />
                <SecondaryNav/>
            
            <div class="ethernet_mobile">
            <div className="ethernet_box ethernet_special">
                <div>
                    <h3>{t('use_dhcp')}?</h3>
                    <form>
                        <span>
                            <input id="on" type="radio" name="dhcp" className="radio" checked={dhcp} onChange={() => setIsFormChanged(true)} />
                            <p>ON</p>
                        </span>
                        <span>
                            <input id="off" type="radio" name="dhcp" className="radio" checked={!dhcp} onChange={() => setIsFormChanged(true)} />
                            <p>OFF</p>
                        </span>
                    </form>
                </div>
                <div>
                    <h3>{t('ethernet_host_name')}</h3>
                    <form className="input_special">
                        <input type="text" name="hostname" className="text" value={hostName} onChange={handleHostNameChange} />
                    </form>
                </div>
                <div>
                    <h3>{t('fixed_ip_address')}</h3>
                    <h4>{t('ip_address')}</h4>
                    <form className="ip-form" onChange={() => setIsFormChanged(true)}>
                        <input type="text" value={ipSegments.ip1} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip1')} className="text" maxLength="3" />
                        <input type="text" value={ipSegments.ip2} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip2')} className="text" maxLength="3" />
                        <input type="text" value={ipSegments.ip3} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip3')} className="text" maxLength="3" />
                        <input type="text" value={ipSegments.ip4} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip4')} className="text" maxLength="3" />
                    </form>
                    <h4>{t('mask')}</h4>
                    <form className="ip-form" onChange={() => setIsFormChanged(true)}>
                        <input type="text" value={maskSegments.mask1} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask1')} className="text" maxLength="3" />
                        <input type="text" value={maskSegments.mask2} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask2')} className="text" maxLength="3" />
                        <input type="text" value={maskSegments.mask3} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask3')} className="text" maxLength="3" />
                        <input type="text" value={maskSegments.mask4} onChange={(e) => handleSegmentChange(e, setMaskSegments, 'mask4')} className="text" maxLength="3" />
                    </form>
                    <h4>{t('gateway')}</h4>
                    <form className="ip-form" onChange={() => setIsFormChanged(true)}>
                        <input type="text" value={gatewaySegments.gateway1} onChange={(e) => handleSegmentChange(e, setGatewaySegments, 'gateway1')} className="text" maxLength="3" />
                        <input type="text" value={gatewaySegments.gateway2} onChange={(e) => handleSegmentChange(e, setGatewaySegments, 'gateway2')} className="text" maxLength="3" />
                        <input type="text" value={gatewaySegments.gateway3} onChange={(e) => handleSegmentChange(e, setGatewaySegments, 'gateway3')} className="text" maxLength="3" />
                        <input type="text" value={gatewaySegments.gateway4} onChange={(e) => handleSegmentChange(e, setGatewaySegments, 'gateway4')} className="text" maxLength="3" />
                    </form>
                    {radonBackgroundError && <span class="error_ethernet" style={{ color: 'red', fontFamily: 'CenturyGothic_bold' }}>{radonBackgroundError}</span>}
                </div>
            </div>
            <div className="ipv6_box ipv6_mobile">
                <h3>{t('use_ipv6')}?</h3>
                <form>
                    <span>
                        <input id="yes" type="radio" name="ipv6" className="radio" checked={ipv6} onChange={() => setIsFormChanged(true)} />
                        <p>Yes</p>
                    </span>
                    <span>
                        <input id="no" type="radio" name="ipv6" className="radio" checked={!ipv6} onChange={() => setIsFormChanged(true)} />
                        <p>No</p>
                    </span>
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
    );
}

