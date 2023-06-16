import './style.css'
import Nav from "../../components/Nav/index.jsx"
import Banner from "../../components/Banner/index.jsx"
import Features from '../../components/Features/index.jsx';
import Footer from "../../components/Footer/index.jsx"
import chatIcon from "../../assets/icon-chat.png";
import moneyIcon from "../../assets/icon-money.png";
import securityIcon from "../../assets/icon-security.png";



function Home() {
	const featuresHome = [
		{
		  iconSrc: chatIcon,
		  title: 'You are our #1 priority',
		  description:
			'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
		},
		{
		  iconSrc: moneyIcon,
		  title: 'More savings means higher rates',
		  description: 'The more you save with us, the higher your interest rate will be!',
		},
		{
		  iconSrc: securityIcon,
		  title: 'Security you can trust',
		  description:
			'We use top of the line encryption to make sure your data and money is always safe.',
		},
	  ];

    return (
		<div className='home'>
			<Nav />
			<Banner />
			<Features features={featuresHome} />;
			<Footer />
		</div>
    )
}
 
export default Home