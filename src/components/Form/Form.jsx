import "../../css/Form.css";


export const Form = ({onChange, inputText, ...props}) => {
    
    return (
        <div className="formContainer">
            <label className="label" htmlFor={props.id}>{inputText}</label>
            <input 
            required
            className="input" 
            type={props.type}
            onChange={onChange}
            {...props}
            />
        </div>
    )

}