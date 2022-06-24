const Button = (props)=>{
    const handleClicks = ()=>{
        props.functionality(props.cartval)
    }
    return <button onClick={handleClicks}>{props.display}</button>
}
export default Button;