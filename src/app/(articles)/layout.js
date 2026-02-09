import "./styles/globals.css";
import TopBar from "@/components/article/TopBar";
import BottomBar from "@/components/article/BottomBar";

const layout = ({ children }) => {
	return (
		<>
			<TopBar />
			{children}
			<BottomBar/>
		</>
	);
};

export default layout;
