import Navbar from "../components/Navbar"
import projectStyles from './Projects.module.css'
import Hodor from '../assets/Hodor.png'
import ChatUp from '../assets/ChatUp.png'
import Fare from '../assets/Fare.png'
import Bujeet from '../assets/Bujeet.png'

import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom"
const Projects = () => {
  return (
    <div className={projectStyles['projects']}>
      <Navbar navText='project 👨🏾‍💻' />
      <div className={projectStyles['projects-area']}>
        <div className={projectStyles['project-card']}>
          <div className={projectStyles['card-img-ctn']}>
            <img src={Bujeet} alt="project-image" />
          </div>
          <h2>
            Bujeet
          </h2>
          <p>
            Bujeet is dedicated to helping people take control of their finances and budget their money effectively.
          </p>
        </div>
        <div className={projectStyles['project-card']}>
          <div className={projectStyles['card-img-ctn']}>
            <img src={ChatUp} alt="project-image" />
          </div>
          <h2>
            Chat Up
          </h2>
          <p>
            ChatUp is a social app that allows you to chat with anyone within 500M of where you are just request and say hi
          </p>
          <Link target="_blank" to='https://www.behance.net/gallery/137536725/ChatUp-A-social-app-case-study'>
            <button className={projectStyles['case-study-btn']}>read case study <FiArrowUpRight />
            </button>
          </Link>
        </div>
        <div className={projectStyles['project-card']}>
          <div className={projectStyles['card-img-ctn']}>
            <img src={Fare} alt="project-image" />
          </div>
          <h2>
            FARE
          </h2>
          <p>
            this project was inspired by backdrop and instagram
          </p>
          <Link target="_blank" to='https://mojola.notion.site/Fare-6d05319aa62646edb57d883d6c5ef895?pvs=4'>
            <button className={projectStyles['case-study-btn']}>read case study <FiArrowUpRight />
            </button>
          </Link>
        </div>
        <div className={projectStyles['project-card']}>
          <div className={projectStyles['card-img-ctn']}>
            <img src={Hodor} alt="project-image" />
          </div>
          <h2>
            HODOR
          </h2>
          <p>
            Hodor is a password manager that remembers all your password for you and keep them safe behind one password that only you know (hey, we got you if you forget this too).
          </p>
          <Link target="_blank" to='https://bootcamp.uxdesign.cc/hodor-a-ui-ux-case-study-33599a28c9c8?gi=b7db25bcde87'>
            <button className={projectStyles['case-study-btn']}>read case study <FiArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
