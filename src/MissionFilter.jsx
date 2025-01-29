import { updateDisplayedMissions } from "./MissionControl";
import "./MissionFilter.css";

function MissionFilter() {
    return (
        <div className="MissionFilter">
            <button onClick={() => {
                updateDisplayedMissions("All");
            }}>All</button>
            <button onClick={() => {
                updateDisplayedMissions("Planned");
            }}>Planned</button>
            <button onClick={() => {
                updateDisplayedMissions("Active");
            }}>Active</button>
            <button onClick={() => {
                updateDisplayedMissions("Completed");
            }}>Completed</button>
        </div>
    );
}

export default MissionFilter;