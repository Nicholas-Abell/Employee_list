const TeamSelector = ({ selectedTeam, changeSelectedTeamHandler }) => {
    return (
        <select value={selectedTeam} onChange={changeSelectedTeamHandler}>
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
        </select>
    )
}

export default TeamSelector;