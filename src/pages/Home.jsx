/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar"
import homeStyles from './Home.module.css'
import selfie from '../assets/profileImage.png'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { FiArrowUpRight, FiBriefcase, FiFeather, FiFigma } from "react-icons/fi";
import { RxArrowTopRight } from "react-icons/rx";
import '../fonts/font/stylesheet.css'

const Home = () => {
    const date = new Date(); // Create a new Date object

    // Specify the desired time zone (e.g., "America/New_York")
    const timeZone = "America/New_York";

    // Convert the date to a string using the specified time zone
    const dateString = date.toLocaleString("en-US", { timeZone });

    // console.log(dateString); // Output the date in the specified time zone

    const handleContactClick = () => {
        const email = 'ojoniyi12@gmail.com';
        const subject = 'Contact Inquiry';
        const body = 'Hello, I would like to inquire about...';

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className={homeStyles['home']}>
            <Navbar navWithDate />
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
                            <p><Link target="_blank" to='https://mojola.notion.site/Mojolaoluwa-d74afa9bd01248f7906703055118ca12'>archive</Link>📂</p>
                        </div>
                    </div>
                    <div className={homeStyles['intro-bottom-area']}>
                        <h1>i design amongst other things/  </h1>
                        <p>off design you can find me having interesting conversations about living life without lids also dabble into books, binge anime and sitcoms, comb through series and music. </p>
                    </div>
                </div>
                <div className={homeStyles['info-area']}>
                    <div className={homeStyles['designs']}>
                        <FiFigma size={30} />
                        <p>i tend to leverage design and research to provide quality solutions spanning across multiple aspect in technology.</p>
                        <Link target="_blank" to='https://drive.google.com/file/d/1EMDw0C53B9J6r2FOJh_od1Y3yxzA5nHh/view'>
                            <button className={homeStyles['resume-btn']}>
                                resume
                                <RxArrowTopRight />
                            </button>
                        </Link>
                        <Link to='/projects'>
                            <button className={homeStyles['projects-btn']}>
                                projects
                                <RxArrowTopRight />
                            </button>
                        </Link>
                    </div>
                    <div className={homeStyles['contact']}>
                        <FiBriefcase size={30} />
                        <p>want to talk about your project or opportunity?</p>
                        <button onClick={handleContactClick}>
                            contact
                            <RxArrowTopRight />
                        </button>
                    </div>
                    <div className={homeStyles['shots']}>
                        <FiFeather size={30} />
                        <p>i get to explore a lot and play around with designs</p>
                        <Link to='/shots'>
                            <button>
                                shots
                                <RxArrowTopRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default Home
