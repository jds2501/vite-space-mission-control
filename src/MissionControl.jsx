import { render } from "react-dom";
import MissionAction from "./MissionAction.jsx";
import MissionCard from "./MissionCard.jsx";
import "./MissionControl.css";
import MissionFilter from "./MissionFilter.jsx";

let currentDisplayStatus = "All";

function renderDisplayedMissions() {
    const statuses = document.querySelectorAll(".status");

    for (const status of statuses) {
        const displayId = document.getElementById("display-" + status.id);

        if (currentDisplayStatus === "All" || currentDisplayStatus === status.textContent) {

            if (displayId.classList.contains("hidden")) {
                displayId.classList.remove("hidden");
            }

        } else if (!displayId.classList.contains("hidden")) {
            displayId.classList.add("hidden");
        }
    }
}

export function updateDisplayedMissions(displayStatus) {
    currentDisplayStatus = displayStatus;
    renderDisplayedMissions();
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
                            renderDisplayedMissions();
                        }} complete={() => {
                            const status = document.getElementById(mission.id);
                            status.textContent = "Completed";
                            renderDisplayedMissions();
                        }} />
                    </div>
                })}
            </div>
        </>
    );

}

export default MissionControl;