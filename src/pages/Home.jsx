import Navbar from "../components/Navbar"
import homeStyles from './Home.module.css'
import selfie from '../assets/profileImage.png'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

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
                    <div className={homeStyles['designs']}>
                        <img src="" alt="figma-logo" />
                        <p>i tend to leverages design and research to provide quality solutions spanning across multiple aspect in technology.</p>
                        <Link>
                            <button>
                                resume
                            </button>
                        </Link>
                        <Link to='/projects'>
                            <button>
                                projects
                            </button>
                        </Link>
                    </div>
                    <div className={homeStyles['contact']}>
                        <img src="" alt="briefcase-icon" />
                        <p>i tend to leverages design and research to provide quality solutions spanning across multiple aspect in technology.</p>
                        <button>
                            contact
                        </button>
                    </div>
                    <div className={homeStyles['shots']}>
                        <img src="" alt="feather-icon" />
                        <p>i tend to leverages design and research to provide quality solutions spanning across multiple aspect in technology.</p>
                        <button>
                            shots
                        </button>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default Home
