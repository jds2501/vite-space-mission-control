import MissionAction from "./MissionAction.jsx";
import MissionCard from "./MissionCard.jsx";
import "./MissionControl.css";
import MissionFilter from "./MissionFilter.jsx";
import { useState } from 'react';

function MissionControl({ missions }) {
    const [statusFilter, setStatusFilter] = useState("All");
    const [currentMissions, setCurrentMissions] = useState(missions);

    function changeStatusFilter(newStatus) {
        setStatusFilter(newStatus);
    }

    function changeMissionStatus(id, newStatus) {
        setCurrentMissions(missions.map((mission) => {
            if (mission.id === id) {
                mission.status = newStatus;
            }

            return mission;
        }));
    }

    const displayedMissions = currentMissions.filter((mission) => {
        return statusFilter === "All" || mission.status === statusFilter;
    });

    return (
        <>
            <h1>Space Mission Control</h1>
            <MissionFilter filterFunc={changeStatusFilter} />
            <div>
                {displayedMissions.map((mission) => {
                    return <div key={mission.id} id={"display-" + mission.id} className="MissionControl-Mission">
                        <MissionCard
                            id={mission.id}
                            name={mission.name}
                            status={mission.status}
                            crew={mission.crew}
                        />
                        <MissionAction launch={() => {
                            changeMissionStatus(mission.id, "Active");
                        }} complete={() => {
                            changeMissionStatus(mission.id, "Completed");
                        }} />
                    </div>
                })}
            </div>
        </>
    );

}

export default MissionControl;