import "./MissionAction.css";

function MissionAction({ launch, complete }) {
    return (
        <div className="MissionAction">
            <div>
                <button onClick={launch}>Launch</button>
            </div>
            <div>
                <button onClick={complete}>Complete</button>
            </div>
        </div>
    );
}

export default MissionAction;