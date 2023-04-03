import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (<div className="mt-14 text-center">Desenvolvido com <FontAwesomeIcon icon={faHeart} style={{color: "#462878"}} /> por <a href="https://www.linkedin.com/in/ricardo-madureira-490022245/" target={'_blank'}><span className='underline text-sky-400 font-light'>Ricardo Madureira</span></a> </div>)
}

export default Footer