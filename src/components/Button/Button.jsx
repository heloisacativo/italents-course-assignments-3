import "../../css/Button.css";

export const Button = ({color = "#5D624C",  className = "", children, onClick, ...props}) => {
    return (
        <button
        type={props.type}
        style={{ backgroundColor: color }}
        onClick={onClick}
        className={`button ${className}`}
        >
        {children}
        </button>
    )
}