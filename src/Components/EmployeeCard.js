const EmployeeCard = ({ selectedTeam, handleEmployeeCardClick, employee }) => {
    return (
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
    )
}

export default EmployeeCard;