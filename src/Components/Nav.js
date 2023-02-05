import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <ul className="list">
                <li className="list__item"><Link className="list__link" to={'/'}>Home</Link></li>
                <li className="list__item"><Link className="list__link" to={'/GroupedTeamMembers'}>Teams</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;