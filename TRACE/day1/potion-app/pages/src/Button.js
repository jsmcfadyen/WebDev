const Button = props => {
    return (
        <button className ="text-right transition bg-blue-500 hover:bg-red-500 p-10 rounded-xl">
            {props.children}
        </button>
    )
}
export default Button