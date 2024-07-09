import { h, Fragment } from 'preact';
import { useLocation } from 'preact-iso';
import { Logout } from '../buttons/Log_Off';
import BatteryStatus from '../battery/Battery_Progress_Bar';
import { useContext } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';
import useUserStore from '../store/userStore';
export function HeaderAlpha() {
	const { url } = useLocation();
	const { setLang, lang, t } = useContext(TranslateContext);
	const { user } = useUserStore(state => state); 

	console.log('Current language:', lang);

	return (
		<header>
			<nav class="header_alpha_main">
				<div class="header_status">
					<BatteryStatus />
					<h3>Alpha-S AS000123</h3>
				</div>
				<div className="header_main_wrapper_two">
				<div className="language_box">
						<button onClick={() => setLang('en')}>
							EN
						</button>
						/
						<button onClick={() => setLang('de')}>
							DE
						</button>
						/
						<button onClick={() => setLang('zh_cn')}>
							zh_CN
						</button>
						/
						<button onClick={() => setLang('fr')}>
							FR
						</button>
				</div>
				<div class="admin_logout">
					<p>
					{t('username')}: {user ? user : 'Admin'}
					</p>
					<a href="/" class={url == 'log-out' && 'active'}>
					<Logout />
					</a>
				</div>
				</div>
			</nav>
		</header>
	);
}
