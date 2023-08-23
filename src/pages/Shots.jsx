import Navbar from "../components/Navbar"
import shotsStyles from './Shots.module.css'
import Architecture from '../assets/shots/architecture.png'
import Chatup from '../assets/shots/chatup.png'
import Connect from '../assets/shots/Connect.png'
import Fluidcoins2 from '../assets/shots/Fluidcoins2.png'
import Fluidcoins from '../assets/shots/Fluidcoins.png'
import Hodor from '../assets/shots/hodor.png'
import Film from '../assets/shots/Film.png'
import Bujeet from '../assets/shots/Bujeet.png'

const Shots = () => {
    const images = [Architecture, Chatup, Connect, Fluidcoins2, Fluidcoins, Hodor, Film, Bujeet]
    console.log(images)
    return (
        <div>
            <Navbar navText='shots 🤾🏾‍♂️ ' />
            <div className={shotsStyles['images-ctn']}>
                {images.map(image => (
                    <img key={image} src={image} />
                ))}
            </div>
        </div>
    )
}

export default Shots
