import { h, Fragment } from 'preact';
import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/layout/Header';
import Login from '../Main/Login';
import { ActualStatusAlternative } from '../Main/Login_alternative';
import { useState } from 'preact/hooks';
export function Home() {
	const [userMadeChoice, setUserMadeChoice] = useState(false);
	return (
		<>
		<Header />
		<div class="inside_home">
		<div class="home">	
			<section class="login_home">
			<h1>Welcome to your Alpha-S Radon monitor</h1>
			<h3>Please login with your username and your password.</h3>
			<Login />	
			</section>
		</div>
		{/* {userMadeChoice && */}
			<section class="actual_status_home">
				<ActualStatusAlternative />
			</section>
		</div>
		{/* this is when authentication gets implemented */}
		{/* <button onClick={() => setUserMadeChoice(true)}>Make choice</button> */}
		<Footer />	
		</>
	);
}

/**
 * @param {{ href: string | import("preact").JSX.SignalLike<string>; title: string | number | bigint | boolean | object | import("preact").ComponentChild[] | import("preact").VNode<any>; description: string | number | bigint | boolean | object | import("preact").ComponentChild[] | import("preact").VNode<any>; }} props
 */
function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
