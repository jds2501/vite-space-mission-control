function MissionCard({ id, name, status, crew }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Status: <span id={"status-" + id}>{status}</span></p>
            <p>Crew: {crew.join(", ")}</p>
        </div>
    );
}

export default MissionCard;