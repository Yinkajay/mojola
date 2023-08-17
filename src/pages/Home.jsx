import Navbar from "../components/Navbar"
import homeStyles from './Home.module.css'
import selfie from '../assets/profileImage.png'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className={homeStyles['home-body']}>
                <div className={homeStyles['intro-area']}>
                    <div className={homeStyles['intro-top-area']}>
                        <div className={homeStyles['top-left']}>
                            <img src={selfie} alt="my-image" />
                            <p className={homeStyles['name']}>mojola</p>
                        </div>
                        <div className={homeStyles['top-right']}>
                            <div className={homeStyles['availability']}> <div className={homeStyles['online-dot']}></div> <p>currently available</p>
                            </div>
                            <p><Link>archive</Link>📂</p>

                        </div>
                    </div>
                    <div className={homeStyles['intro-bottom-area']}>
                        <h1>i design amongst other things/  </h1>
                        <p>off design you can find me having interesting conversations about living life without lids also dabble into books, binge anime and sitcoms, comb through series and music. </p>
                    </div>
                </div>
                <div className={homeStyles['info-area']}>

                </div>
            </section>
        </div>
    )
}

export default Home
