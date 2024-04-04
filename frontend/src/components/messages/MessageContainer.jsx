import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(selectedConversation?._id);

	return (
		<div className='md:min-w-[450px] flex flex-col ml-2'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='flex justify-between bg-stone-400 px-4 py-2 mb-2'>
						<div
							className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				
			`}
						>
							<div className={`avatar`}>
								<div className='w-8 rounded-full'>
									<img src={selectedConversation?.profilePic} alt='user avatar' />
								</div>
							</div>

							<div className='flex flex-col flex-1'>
								<div className='flex gap-2 justify-between'>
									<p className='font-bold text-gray-200'>{selectedConversation?.fullName}</p>
									<span className='text-xl'>{selectedConversation.emoji}</span>
								</div>
							</div>
						</div>
						{/* <span className='label-text'>To:</span>{" "} */}
						{/* <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span> */}
						<div className={`font-bold text-gray-200 mt-2 ${isOnline ? "text-green-400" : ""}`} >
							{isOnline ? "online" : "offline"}
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
