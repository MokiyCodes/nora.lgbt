import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header: FunctionalComponent = () => {
	return (
		<header class={`${style.header} s_header`} id="header">
			<h1>Mokiy</h1>
			<nav>
				<Link activeClassName={style.active} href="/">
					Home
				</Link>
				<Link activeClassName={style.active} href="/about">
					About me
				</Link>
				<Link activeClassName={style.active} href="/signing">
					Signing
				</Link>
				{/* <Link activeClassName={style.active} href='/projects'>
          Projects
        </Link> */}
			</nav>
		</header>
	);
};

export default Header;
