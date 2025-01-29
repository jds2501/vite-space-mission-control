import MissionAction from "./MissionAction.jsx";
import MissionCard from "./MissionCard.jsx";
import "./MissionControl.css";

function MissionControl({ missions }) {
    return (
        <>
            <h1>Space Mission Control</h1>
            <div>
                {missions.map((mission) => {
                    const status = document.getElementById("status-" + mission.id);
                    return <div key={mission.id} className="MissionControl-Mission">
                        <MissionCard
                            id={mission.id}
                            name={mission.name}
                            status={mission.status}
                            crew={mission.crew}
                        />
                        <MissionAction launch={() => {
                            status.textContent = "Active";
                        }} complete={() => {
                            status.textContent = "Completed";
                        }} />
                    </div>
                })}
            </div>
        </>
    );

}

export default MissionControl;