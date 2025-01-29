import "./MissionFilter.css";

function MissionFilter({ filterFunc }) {
    const MISSION_FILTERS = ["All", "Planned", "Active", "Completed"];

    return (
        <div className="MissionFilter">
            {MISSION_FILTERS.map((missionFilter) => {
                return <button key={missionFilter} onClick={() => {
                    filterFunc(missionFilter);
                }}>{missionFilter}</button>
            })}
        </div>
    );
}

export default MissionFilter;