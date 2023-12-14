

const Group = ({ children, onSubmit}) => (
	<form
		className="w-full flex flex-col gap-5 px-6"
		onSubmit={onSubmit ? onSubmit : () => { }}
	>
		{children}
	</form>
)
const Text = ({name, label, placeholder, onChange, onFocus, onBlur, required=false, value="", ref=null, redOutline}) => (
		<>
		{label? <label for={name} >{label}</label> : null}
		<input
			type="text"
			name={name}
			placeholder={placeholder}
			onChange={onChange ? onChange : () => { }}
			onFocus={onFocus ? onFocus : () => { }}
			onBlur={onBlur ? onBlur : () => { }}
			required={required}
			className={`outline-none px-2 py-1 rounded-xl text-[#3C4856] border-2 ${redOutline? "border-red-500":"border-[#3C4856]"}`}
			value={value}
			ref={ref}
		/>
		</> 
	)

	const Password = ({name, label, placeholder, onChange, onFocus, onBlur, required=false, value="", ref=null, redOutline}) => (
		<>
		{label? <label for={name} >{label}</label> : null}
		<input
			type="password"
			name={name}
			placeholder={placeholder}
			onChange={onChange ? onChange : () => { }}
			onFocus={onFocus ? onFocus : () => { }}
			onBlur={onBlur ? onBlur : () => { }}
			required={required}
			className={`outline-none px-2 py-1 rounded-xl transition-colors duration-300 text-[#3C4856] border-2 ${redOutline? "border-red-500":"border-[#3C4856]"}`}
			value={value}
			ref={ref}
		/>
		</> 
	)

const Button = ({ children, type, border = true, disabled = false }) => (
	<button
		type={type}
		disabled={disabled}
		className={`w-full ${disabled? "bg-[#49575e] text-gray-400" : "bg-[#00A9FF] text-[#fff]"} my-1 py-2 px-2  rounded-xl  font-semibold 
		  ${!disabled && "hover:text-[#00A9FF] hover:bg-[#fff]"} ${disabled? "cursor-not-allowed" : "cursor-pointer"} transition-colors duration-300 border-[#3C4856]`}
		style={border ? {borderWidth: '2px'} : {}}
	>{children}</button>
)

export {Text, Password, Group, Button}