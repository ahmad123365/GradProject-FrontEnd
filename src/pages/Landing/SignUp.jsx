import {useRef, useState, useEffect} from 'react'
import { Group, Text, Button, Password } from '../../components/Form'
import { NavLink } from 'react-router-dom';
// import { InfoCircleOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux";
import { register } from '../../redux/actions/authActions';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
// const REGISTER_URL = '/register';

const SignUp = () => {
	const dispatch = useDispatch() 
	const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [userFocus, setUserFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
	const [validEmail, setValidEmail] = useState(false)

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
		setValidEmail(EMAIL_REGEX.test(email));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd, email])

    useEffect(() => {
        setErrMsg('');
	}, [user, pwd, matchPwd])
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const body = { name: user, email: email, password: pwd, passwordConfirm: matchPwd }
		dispatch(register(body))
	}
	
  return (
	<div className='w-full flex justify-center items-center h-[100vh] bg-[#00A9FF]'>
		<div className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] h-[100vh] flex flex-col items-center px-5 pt-10 md:pt-20 lg:pt-30 gap-10 sm:gap-15 '>
			  <img src={process.env.PUBLIC_URL + '/logo.png' } alt="Logo" className='w-[10rem]' />
			<div className='bg-[#D6F4FF] w-full rounded-md flex flex-col items-center px-8'>
				  {success ? <>
					<h1>Success!</h1>
                    <p>
                        <NavLink to="/signin">Sign In</NavLink>
                    </p>
				  </> : <><h1 className='text-[2rem] mb-7 mt-5 text-center w-fit text-[#00A9FF] pb-2 px-7 font-semibold border-b-2 border-[#3C4856]/[.40]'>SIGN UP</h1>
				<Group onSubmit={handleSubmit}>
					<p ref={errRef} className={errMsg ? "block" : "hidden"} aria-live="assertive">{errMsg}</p>
					<Text
						ref={userRef}
						name="fullName"
						placeholder={"Full Name..."}
						onFocus={() => setUserFocus(true)}
						onBlur={() => setUserFocus(false)}
						required
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/> 	
					
					<Text
						name="email"
						placeholder={"Email..."}
						onFocus={() => setEmailFocus(true)}
						onBlur={() => setEmailFocus(false)}
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						redOutline={emailFocus && !validEmail}
					/> 	
					{/* <p  className={`${emailFocus && !validEmail ? "block" : "hidden"} bg-slate-400 p-2 text-red-500 rounded-lg leading-6`}>
						Invalid Email
					</p> */}
					<Password 
						name="password"
						placeholder={"Password..."}
						onFocus={() => setPwdFocus(true)}
						onBlur={() => setPwdFocus(false)}
						required
						value={pwd}
						onChange={(e) => setPwd(e.target.value)}
						redOutline={pwdFocus && !validPwd}
					/> 	
					<p  className={`${pwdFocus && !validPwd ? "block" : "hidden"} bg-slate-400 p-2 text-red-500 rounded-lg leading-6`}>
						- 8 to 24 characters.<br />
						- Must include uppercase and lowercase letters, a number and a special character.<br />
						- Allowed special characters:! @ # $ %
					</p>
					<Password 
						name="confirmPassword"
						placeholder={"Confirm Password..."}
						onFocus={() => setMatchFocus(true)}
						onBlur={() => setMatchFocus(false)}
						required
						onChange={(e) => setMatchPwd(e.target.value)}
						value={matchPwd}
						redOutline={matchFocus && !validMatch}

					/> 	
					<p  className={`${matchFocus && !validMatch ? "block" : "hidden"} bg-slate-400 p-2 text-red-500 rounded-lg leading-6`}>	
						 passwords don't match
					</p>
					<Button 
						type='submit'
						disabled={!validEmail || !validPwd || !validMatch || !user }
					>Sign up</Button>
				</Group>
				<div className='flex justify-between px-6 mt-1 mb-4 w-full'>
					<a href='/login' className='text-[#00A9FF] underline opacity-60 hover:opacity-100 truncate text-sm'>already have an acoount</a>
				</div></>}
			</div>
			
		</div>
	</div>
  )
}

export default SignUp