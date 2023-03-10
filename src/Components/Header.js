const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Team Member Alocation</h1>
            <h1>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? 'member' : 'members'}</h1>
        </div>
    )
}

export default Header;