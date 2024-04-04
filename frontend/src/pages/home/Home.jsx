import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border-2 border-solid border-white rounded-lg p-3'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
