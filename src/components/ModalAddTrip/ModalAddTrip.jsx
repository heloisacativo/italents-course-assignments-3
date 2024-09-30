import { useNavigate } from "react-router-dom";
import "../../css/ModalAddTrip.css";
import { Button } from "../Button/Button";
import { Form } from "../Form/Form";
import { useState } from "react";

export const ModalAddTrip = ({onClose, onAddTrip }) => {
    const [tripForm, setTripForm] = useState({
        name: "",
        place: "",
        date: ""
    })

    const handleFieldsChange = (event) => {
        setTripForm({
            ...tripForm,
            [event.target.name] : event.target.value
        })
        console.log(tripForm)
    }

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        onAddTrip(tripForm);
        setTripForm({name: "", place: "", date: ""})
        onClose();
        navigate("/my-trips")
    };

    return (
        <>
        <div className="modalBackground" onClick={onClose}></div>
        <div className="modalAddTripContainer">
        <form>
            <Form inputText="Digite nome" id="name" name="name" type="text" value={tripForm.name} onChange={event => handleFieldsChange(event)}/>
            <Form inputText="Digite o lugar da viagem" id="place" name="place" value={tripForm.place} onChange={event => handleFieldsChange(event)}/>
            <Form inputText="Escolha a data" id="date" name="date" type="date" value={tripForm.date} onChange={event => handleFieldsChange(event)}/>
        </form>
        <Button type="submit" onClick={handleClick}>Salvar</Button>
        </div>
        </>
    )

}