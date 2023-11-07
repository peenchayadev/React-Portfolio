import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience =()=> {
    return(
        <div className="space-y-4 ">
            <div className='font-semibold text-xl'>Experience</div>
        
        <div className="grid grid-cols-[20%_80%]">
            <div>
                <div>
                 <span className="text-sm">Mini Project</span>
                </div>
        </div>

        <div className="grid gap-y-4">
                <div className="font-semibold">POS Web Application</div>
                    <div className="flex gap-4 text-lg pl-2">
                        <FontAwesomeIcon icon={faGithub}/>
                </div>

                <div className="text-sm">
                    Developed using HTML,CSS,Bootstrap,JavaScript,PHP
                </div>

                <div className="flex gap-3 text-sm">
                    <div className="bg-primary text-primaryContent font-semibold px-2 py-1 rounded-lg hover:text-primaryBase">HTML</div>
                    <div className="bg-primary text-primaryContent font-semibold px-2 py-1 rounded-lg hover:text-primaryBase">CSS</div>
                    <div className="bg-primary text-primaryContent font-semibold px-2 py-1 rounded-lg hover:text-primaryBase">JavaScript</div>
                </div>
        </div>

        
    </div>
 </div>
   
    )
}
export default Experience;