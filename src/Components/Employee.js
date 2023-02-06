import './Employee.scss';
import TeamSelector from './TeamSelector';

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, changeSelectedTeamHandler }) => {
    return (
        <main>
            <TeamSelector
                changeSelectedTeamHandler={changeSelectedTeamHandler}
            />
            <div className={'card-wrapper'}>
                {employees.map((employee) => (
                    <div
                        className='card'
                        key={employee.id}
                        style={employee.teamName === selectedTeam
                            ? { border: 'solid red 4px' }
                            : { border: 'solid black' }}>
                        <div
                            className='card__fake-img'
                            id={employee.id}
                            onClick={handleEmployeeCardClick}
                            style={(employee.gender === 'male')
                                ? { backgroundColor: 'blue' }
                                : { backgroundColor: 'pink' }}
                        ></div>
                        <p>{employee.fullName}</p>
                        <p>{employee.teamName}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Employees;