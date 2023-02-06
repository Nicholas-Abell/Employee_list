import { useState } from "react";
import './GroupedTeamMembers.scss'

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {

    const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers());

    function groupedTeamMembers() {
        let teams = []

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
        teams.push(teamD);

        return teams;
    }

    const handleTeamClick = (event) => {
        let transformeGroupData = groupedEmployees.map((groupData) => {
            groupData.team === event.currentTarget.id
                ? { ...groupData, collapsed: !groupData.collapsed }
                : groupData
        })

        setGroupedData(transformeGroupData);
        setSelectedTeam(currentTarget.id);
    }

    return (
        <div className="team">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team}>
                            <h1 id={item.team} onClick={handleTeamClick} className="team__title">Team Name: {item.team}</h1>
                            {
                                item.members.map((member) => {
                                    return (
                                        <div key={member.id} style={item.collapsed ? { display: 'none' } : { display: '' }}>
                                            <h2>{member.fullName} : {member.designation}</h2>
                                        </div>
                                    );
                                })
                            }
                            <h2></h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GroupedTeamMembers;