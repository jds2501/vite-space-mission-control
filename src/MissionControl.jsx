import MissionAction from "./MissionAction.jsx";
import MissionCard from "./MissionCard.jsx";
import "./MissionControl.css";

function MissionControl({ missions }) {
    return (
        <>
            <h1>Space Mission Control</h1>
            <div>
                {missions.map((mission) => {
                    return <div className="MissionControl-Mission">
                        <MissionCard key={mission.id}
                            name={mission.name}
                            status={mission.status}
                            crew={mission.crew}
                        />
                        <MissionAction />
                    </div>
                })}
            </div>
        </>
    );

}

export default MissionControl;