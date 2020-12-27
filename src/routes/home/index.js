import { h } from 'preact';
import style from './style.scss';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<div className="text-center">
			<button type="button" className="btn btn-warning">Hello</button>
		</div>
	</div>
);

export default Home;
