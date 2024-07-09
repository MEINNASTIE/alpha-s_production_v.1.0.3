import { h, Fragment } from 'preact';
import BatteryStatus from '../battery/Battery_Progress_Bar';
export function Header() {

	return (
		<header>
			<nav>
				<div class="header_status">
					<BatteryStatus />
					<h3>Alpha-S AS000123</h3>	
				</div>
			</nav>
		</header>
	);
}
