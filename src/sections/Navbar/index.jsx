import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar =()=>{
    return(
      <div className='flex flex-col gap-3 font-semibold'>
          <div>
          <FontAwesomeIcon className='text-primaryUse mr-2' icon={faArrowAltCircleRight} />
            Education
            </div>
          <div>
          <FontAwesomeIcon className='text-primaryUse mr-2' icon={faArrowAltCircleRight} />
            Experience
          </div>
          <div>
          <FontAwesomeIcon className='text-primaryUse mr-2' icon={faArrowAltCircleRight} />
            Technical Skill
          </div>
          
      </div>
    )
}
export default Navbar;