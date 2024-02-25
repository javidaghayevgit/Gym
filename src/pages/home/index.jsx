import '../home/style.css'
import { Link} from 'react-router-dom'
function Home(){
    return(
        <div className='home'>
            <div className="background_image">
            <div className="center-text container">
                <span>FITNESS ELEMENTS</span>
                <h1>BMI CALCULATOR</h1>
                <p>Gutim comes packed with the user-friendly BMI Calculator <br /> shortcode which lets</p>
                <Link to='#' className='orangered-btn'>Read More</Link>
            </div>
            </div>
        </div>
    )
}
export default Home;