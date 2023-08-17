import { formatDate } from '../utils/formatDate'
import navStyles from './Navbar.module.css'

const Navbar = () => {
    const date = formatDate(new Date())
    console.log(date)
    return (
        <nav className={navStyles['navbar']}>
                <h1>product designer 👋🏾</h1>
                <p>
                {date}
            </p>
        </nav>
    )
}

export default Navbar
