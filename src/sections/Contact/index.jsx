import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact =()=>{
    return(
        <div className='flex items-end gap-4 text-2xl'>
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryBase transition-all' icon={faGithub}/>
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryBase transition-all' icon={faFacebook}/>
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryBase transition-all' icon={faEnvelope}/>
            </div>
    )
}
export default Contact;