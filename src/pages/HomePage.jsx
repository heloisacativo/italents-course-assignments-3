import { PlusCircleIcon, PlusIcon } from "@heroicons/react/16/solid";
import "../css/HomePage.css";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { ModalAddTrip } from "../components/ModalAddTrip/ModalAddTrip";

export const HomePage = ({ onAddTrip }) => {

    const [isOpenModalAddTrip, setIsOpenModalAddTrip] = useState(false);

   
    const clickOpenModalAddTrip = () => {
        setIsOpenModalAddTrip(true)
    }

    const clickCloseModalAddTrip = () => {
        setIsOpenModalAddTrip(false);
    }

    return(
        <div className="mainContainer">
        <Button
        type = "submit"
        className="addButton"
        onClick={clickOpenModalAddTrip}>
        <PlusIcon/>
        Adicionar Viagem
        </Button>
        {isOpenModalAddTrip && (
            <ModalAddTrip
            onClose={clickCloseModalAddTrip}
            onAddTrip={onAddTrip}
            />
        )}
        </div> 
    )
}