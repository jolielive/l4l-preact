import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
					Live 4 Love is HERE! Welcome to my new home. My name is Jolie, and I'm the creator of Live 4 Love custom designs. Please visit the store by following the link in the nav menu. 
					</div>
					<div class={style.author}>- The Local Newspaper</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
				Are you interested in learning some fun ways to DIY your own place? over to my blog for weekly challenges, stories about my journey and special topics that we will be discussing focused on YOU, the viewer, to discover your passion  for personal and professional development!
				</p>
				<p class={style.bioright}>
				My goal is to build a community of people who are on their own journey, open to being helped, and wanting to help others with questions no matter where they are on the path to success.
				</p>
			</div>
		</div>
	);
};

export default Home;
