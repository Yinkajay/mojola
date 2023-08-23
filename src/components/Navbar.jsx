/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate2'
import navStyles from './Navbar.module.css'

const Navbar = ({ navWithDate, navText }) => {
    const date = formatDate(new Date())

    if (navWithDate) {
        return (
            <nav className={navStyles['navbar']}>
                <h1>product designer 👋🏾</h1>
                <p>
                    {date}
                </p>
            </nav>
        )
    }
    else {
        return (
            <nav className={navStyles['navbar']}>
                <h1>{navText}</h1>
                <p>
                    <Link to='/'>
                        back
                    </Link>
                </p>
            </nav>
        )
    }
}

export default Navbar
