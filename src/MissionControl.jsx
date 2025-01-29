import MissionAction from "./MissionAction.jsx";
import MissionCard from "./MissionCard.jsx";
import "./MissionControl.css";
import MissionFilter from "./MissionFilter.jsx";

export function updateDisplayedMissions(displayStatus) {
    const statuses = document.querySelectorAll(".status");

    for (const status of statuses) {
        const displayId = document.getElementById("display-" + status.id);
        console.log(displayId);

        if (displayStatus === "All" || displayStatus === status.textContent) {
            console.log("SHOW: ", status.textContent);
        } else {
            console.log("NO RENDER: ", status.textContent);
        }
    }
}

function MissionControl({ missions }) {
    return (
        <>
            <h1>Space Mission Control</h1>
            <MissionFilter />
            <div>
                {missions.map((mission) => {
                    return <div key={mission.id} id={"display-" + mission.id} className="MissionControl-Mission">
                        <MissionCard
                            id={mission.id}
                            name={mission.name}
                            status={mission.status}
                            crew={mission.crew}
                        />
                        <MissionAction launch={() => {
                            const status = document.getElementById(mission.id);
                            status.textContent = "Active";
                        }} complete={() => {
                            const status = document.getElementById(mission.id);
                            status.textContent = "Completed";
                        }} />
                    </div>
                })}
            </div>
        </>
    );

}

export default MissionControl;