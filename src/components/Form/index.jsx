

const Group = ({ children, onSubmit}) => (
	<form
		className="w-full flex flex-col gap-5 px-6"
		onSubmit={onSubmit ? onSubmit : () => { }}
	>
		{children}
	</form>
)
const Text = ({name, label, placeholder, onChange}) => (
		<>
		{label? <label for={name} >{label}</label> : null}
		<input
			type="text"
			name={name}
			placeholder={placeholder}
			onChange={onChange ? onChange : () => { }}
			className="outline-none px-2 py-1 rounded-xl text-[#3C4856] border-2 border-[#3C4856]"
		/>
		</> 
	)

const Button = ({children, type}) => (
	<button
		type={type}
		className="w-full bg-[#00A9FF] my-1 py-1 border-2 rounded-xl text-[#fff] border-[#3C4856] font-semibold 
		 hover:text-[#00A9FF] hover:bg-[#fff] transition-colors duration-300" 
	>{children}</button>
)

export {Text, Group, Button}