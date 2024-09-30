import { ArrowLeftCircleIcon, ArrowLeftIcon, PlusIcon } from "@heroicons/react/16/solid"
import "../css/TripsPage.css"
import { Button } from "../components/Button/Button"
import { useState } from "react";
import { ModalAddTrip } from "../components/ModalAddTrip/ModalAddTrip";
import { Link } from "react-router-dom";
import { ModalAddGoal } from "../components/ModalAddGoal/ModalAddGoal";

export const TripsPage = ({ trips }) => {
    const [isOpenModalAddGoal, setIsOpenModalAddGoal] = useState(false);
    const [goals, setGoals] = useState([]);


    const clickOpenModalAddGoal = () => {
        setIsOpenModalAddGoal(true)
    }

    const clickCloseModalAddGoal = () => {
        setIsOpenModalAddGoal(false);
    }

    const handleAddGoal = (newGoal) => {
        setGoals([...goals, newGoal]);
    }

    return(
        <>
        <div className="tripPageMain">
        <Link to="/" className="backButton">
            <ArrowLeftIcon/>
        </Link>
        <div className="tripPageContainer">
            <h1>Minhas viagens</h1>
            <div className="listTrips">
            {trips.map((trip, index) => (
                            <div key={index} className="tripItem">
                                <div className="nameItem">
                                <h2>Nome</h2>
    
                                <h4>{trip.name}</h4>
                                </div>
                                <div className="nameItem">
                                <h2>Lugar</h2>
                                <h4>{trip.place}</h4>
                                </div>
                                <div className="nameItem">
                                <h2>Data</h2>            
                                <h4>{trip.date}</h4>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
        <div className="menuTripPage">
        <div className="goalsTrip">
        <h1>Metas</h1>
        <Button className="addButton"
        onClick={clickOpenModalAddGoal}>
        <PlusIcon className="iconPlus"
        />
        Adicionar viagem    
        </Button>
        </div>
        <div className="listGoals">
        {goals.map((goal, index) => (
                            <div key={index} className="tripItem">
                                <h4>{goal.goal}</h4>
                            </div>
                        ))}
        </div>
        </div>
        </div>
        {isOpenModalAddGoal && (
            <ModalAddGoal
            onClose={clickCloseModalAddGoal}
            onAddGoal={handleAddGoal}
            />
        )}
        </>
    )
}