import "./MissionFilter.css";

function MissionFilter({ }) {
    return (
        <div className="MissionFilter">
            <button>All</button>
            <button>Planned</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

export default MissionFilter;