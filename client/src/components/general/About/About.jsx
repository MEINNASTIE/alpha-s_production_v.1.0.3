import { h, Fragment } from 'preact';
import './about.css'
import QR from '../../../assets/qr_tester.png'
import Logo from '../../../assets/Logo-Bertin-Technologies_White.png'
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import { TranslateContext } from '@denysvuika/preact-translate';
import { useContext } from 'preact/hooks';
export function About() {
    const { setActiveNav } = useNavStore();
    const { t } = useContext(TranslateContext);

    const handleNavChange = (navItem) => {
      setActiveNav(navItem);
    }

    return (
        <>
        <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <div className="hidden">
                <SecondaryNav />
            </div>  
        <div class="about_box">
            <div>
                <p><span>{t('frontend_version')}:</span> {t('hardware')} V1.001, {t('firmware')} FE1.002D v.12.07.2023., 12:23:23</p>
                <p><span>{t('chamber_version')}:</span> {t('hardware')} V1.002, {t('firmware')} As1.019A v. 17.06.2023., 09:13:45</p>
                <p><span>{t('wifi_version')}</span> {t('hardware')} V1.000, {t('firmware')} XYD32124.DNOW</p>
                <p><span>{t('configuration_info')}:</span>21000Abh, 15000CB2h, English</p>
            </div>
            <div>
                <img src={QR} alt="QR_code" />
                <img src={Logo} alt="Bertin_logo" />
            </div>
        </div>
        </div>
        <FooterAlpha />
        </>
    )
}