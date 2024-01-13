import {useState, useEffect} from 'react'
import { Group, Text, Button,  } from '../../components/Form'
import { useDispatch } from "react-redux";
import { sendForgotPwdEmail } from '../../redux/api/authActions';
import Loading from '../../components/Layout/Loading';

const EMAIL_REGEX= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/

const ForgotPassword = () => {
	const dispatch = useDispatch()
	const [email, setEmail] = useState("")
	const [emailFocus, setEmailFocus] = useState(false);
	const [validEmail, setValidEmail] = useState(false)

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

	const handleSubmit = (e) => {
		e.preventDefault();
		const body = { email: email }
		dispatch(sendForgotPwdEmail(body))
	}

  return (
	<div className='w-full flex justify-center items-center h-[100vh] bg-[#00A9FF]'>
		<Loading />
		<div className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] h-[100vh] flex flex-col items-center px-5 pt-10 md:pt-20 lg:pt-30 gap-10 sm:gap-15 '>
			  <img src={process.env.PUBLIC_URL + '/logo.png' } alt="Logo" className='w-[10rem]' />
			<div className='bg-[#D6F4FF] w-full rounded-md flex flex-col items-center px-8 pt-8 pb-6'>
				<Group onSubmit={handleSubmit}>
					<Text
						name="email"
						placeholder={"Write your Email..."}
						onFocus={() => setEmailFocus(true)}
						onBlur={() => setEmailFocus(false)}
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						redOutline={emailFocus && !validEmail}
					/> 
					<Button 
						type='submit'
						disabled={!email}
					>Send Email</Button>
				</Group>
			</div>
		</div>
	</div>
  )
}

export default ForgotPassword