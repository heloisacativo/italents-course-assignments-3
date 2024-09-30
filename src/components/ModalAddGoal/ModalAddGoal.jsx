
import { useNavigate } from "react-router-dom";
import "../../css/ModalAddTrip.css";
import { Button } from "../Button/Button";
import { Form } from "../Form/Form";
import { useState } from "react";

export const ModalAddGoal = ({onClose, onAddGoal }) => {
    const [goalForm, setGoalForm] = useState({
        goal: "",
    })

    const handleFieldsChange = (event) => {
        setGoalForm({
            ...goalForm,
            [event.target.name] : event.target.value
        })
        console.log(goalForm)
    }


    const handleClick = (event) => {
        event.preventDefault();
        onAddGoal(goalForm)
        setGoalForm({goal: ""})
        onClose();

    };

    return (
        <>
        <div className="modalBackground" onClick={onClose}></div>
        <div className="modalAddTripContainer">
        <form>
            <Form inputText="Digite sua meta" id="goal" name="goal" type="text" value={goalForm.name} onChange={event => handleFieldsChange(event)}/>
        </form>
        <Button type="submit" onClick={handleClick}>Salvar</Button>
        </div>
        </>
    )

}
