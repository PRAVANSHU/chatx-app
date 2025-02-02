import { BiLogOut } from "react-icons/bi";
import useLogout from ".././hooks/useLogout.js"; // Ensure the file exists and add `.js` if necessary

const LogoutButton = () => {
	const { loading, logout } = useLogout(); // Ensure useLogout is correctly implemented

	return (
		<div className="mt-auto">
			{!loading ? (
				<BiLogOut
					className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition"
					onClick={logout}
				/>
			) : (
				<span className="loading loading-spinner text-white"></span>
			)}
		</div>
	);
};

export default LogoutButton;
