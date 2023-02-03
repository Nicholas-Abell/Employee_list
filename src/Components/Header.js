const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <div>
            <h1>Team Member Alocation</h1>
            <h1>{selectedTeam} has {teamMemberCount} members</h1>
        </div>
    )
}

export default Header;