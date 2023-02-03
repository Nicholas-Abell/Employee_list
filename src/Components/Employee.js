import './Employee.scss';

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, changeSelectedTeamHandler }) => {
    return (
        <main>
            <select value={selectedTeam} onChange={changeSelectedTeamHandler}>
                <option value='TeamA'>TeamA</option>
                <option value='TeamB'>TeamB</option>
                <option value='TeamC'>TeamC</option>
                <option value='TeamD'>TeamD</option>
            </select>
            <div className={'card-wrapper'}>
                {employees.map((employee) => (
                    <div
                        className='card'
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