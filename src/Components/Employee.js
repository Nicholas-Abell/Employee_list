import './Employee.scss';
import TeamSelector from './TeamSelector';
import EmployeeCard from './EmployeeCard';

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, changeSelectedTeamHandler }) => {
    return (
        <main>
            <TeamSelector
                changeSelectedTeamHandler={changeSelectedTeamHandler}
            />
            <div className={'card-wrapper'}>
                {employees.map((employee) => (
                    <EmployeeCard
                        employee={employee}
                        handleEmployeeCardClick={handleEmployeeCardClick}
                        selectedTeam={selectedTeam} />
                ))}
            </div>
        </main>
    )
}

export default Employees;