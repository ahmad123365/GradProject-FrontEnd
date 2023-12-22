import { NavLink, useRouteError } from "react-router-dom";
import { Button } from "../../components/Form";

const ErrorPage = () =>  {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5">
			<h1 className="text-[4rem]">Oops!</h1>
			<p className="text-[2rem] text-center">Sorry, an unexpected error has occurred.</p>
			<NavLink to="/home"><Button >Return to Home Page</Button></NavLink> 
		</div>
	)	
}

export default ErrorPage