import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adminPic from "../../assets/admin.png"
import { useState } from "react";
import { faArrowAltCircleRight, faArrowRight, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Experience =()=> {
    const [isMouseEnter,setIsMouseEnter] = useState({});

    return(
        <div className="">
            
        <div className='font-semibold text-md'>Experience</div>
        <div 
            className={`grid grid-cols-[25%_75%] transition-all ${isMouseEnter['exp1']?  "bg-gray-800":""} rounded-md px-2 py-6`}
            onMouseEnter={()=> setIsMouseEnter({'exp1': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp1': false})}
        >
            <div>
                <div>
                    <span className={`text-sm pl-7 font-semibold ${isMouseEnter['exp1'] ? "text-primaryUse":""}`}>Mini Project</span>
                </div>
                <div>
                    <img src={adminPic} className="w-5/6 rounded-lg border-2 border-gray-500 mt-4"/>
                </div>
            </div>

            <div className="grid gap-y-4">
                <div className={`font-semibold text-primary ${isMouseEnter['exp1'] ? "text-primaryUse":""}`}>
                    AdminLTE PHP
                    <FontAwesomeIcon className= {`text-xs -rotate-45 duration-300 ease-out ${isMouseEnter['exp1'] ? "translate-x-1 translate-y-1":""}`}icon={faArrowRight}/>
                </div>

                <div className="flex gap-4 text-lg">
                    <a href="https://github.com/peenchayadev/Admin_php" target="_blank" className="hover:scale-100 hover:text-yellow-500  transition-all"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <div className="text-sm">Using HTML, CSS, PHP, Bootstrap</div>
                <div className="flex gap-3 text-sm">
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp1'] ? " hover:text-yellow-500":""}`}>HTML</div>
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp1'] ? " hover:text-yellow-500":""}`}>CSS</div>
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp1'] ? " hover:text-yellow-500":""}`}>PHP</div>
                </div>
            </div>
         </div>

         <div 
            className={`grid grid-cols-[25%_75%] transition-all ${isMouseEnter['exp2']?  "bg-gray-800":""} rounded-md px-2 py-6`}
            onMouseEnter={()=> setIsMouseEnter({'exp2': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp2': false})}
        >
            <div>
                <div>
                    
                </div>
            </div>

            <div className="grid gap-y-4">
                <div className={`font-semibold text-primary ${isMouseEnter['exp2'] ? "text-primaryUse":""}`}>
                    Design REST API for Exchange Currency rate
                </div>

                <div className="text-sm">Design REST API Using APIary , Developed using rust</div>

                <div className="flex gap-3 text-sm">
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp2'] ? " hover:text-yellow-500":""}`}>Rust</div>
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp2'] ? " hover:text-yellow-500":""}`}>APIary</div>
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp2'] ? " hover:text-yellow-500":""}`}>Postman</div>
                </div>
            </div>
         </div>

         <div 
            className={`grid grid-cols-[25%_75%] transition-all ${isMouseEnter['exp3']?  "bg-gray-800":""} rounded-md px-2 py-6`}
            onMouseEnter={()=> setIsMouseEnter({'exp3': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp3': false})}
        >
            <div>
                <div>
                    
                </div>
            </div>

            <div className="grid gap-y-4">
                <div className={`font-semibold text-primary ${isMouseEnter['exp3'] ? "text-primaryUse":""}`}>
                    Conveyor Systems Controlled
                </div>

                <div className="text-sm">IoT Conveyor Control System with Arduino</div>

                <div className="flex gap-3 text-sm">
                    <div className={`bg-primary text-black px-2 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp3'] ? " hover:text-yellow-500":""}`}>C</div>
                    <div className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp3'] ? " hover:text-yellow-500":""}`}>Arduino</div>
                </div>
            </div>
         </div>

         <div 
            className={`grid grid-cols-[25%_75%] transition-all ${isMouseEnter['exp4']?  "bg-gray-800":""} rounded-md px-2 py-6`}
            onMouseEnter={()=> setIsMouseEnter({'exp4': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp4': false})}
        >
            <div>
                <div>
                    
                </div>
            </div>

            <div className="grid gap-y-4">
                <div className={`font-semibold text-primary ${isMouseEnter['exp4'] ? "text-primaryUse":""}`}>
                    Air Conditioning Control System 
                </div>

                <div className="text-sm">Air Conditioning Control System with Java</div>

                <div className="flex gap-3 text-sm">
                    <div className={`bg-primary text-black px-2 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp4'] ? " hover:text-yellow-500":""}`}>Java</div>
                </div>
            </div>
         </div>

         <div 
            className={`grid grid-cols-[25%_75%] transition-all ${isMouseEnter['exp5']?  "bg-gray-800":""} rounded-md px-2 py-6`}
            onMouseEnter={()=> setIsMouseEnter({'exp5': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp5': false})}
        >
            <div>
                <div>
                    
                </div>
            </div>

            <div className="grid gap-y-4">
                <div className={`font-semibold text-primary ${isMouseEnter['exp5'] ? "text-primaryUse":""}`}>
                    SE SHOP - ระบบหลังบ้านร้านค้า
                </div>

                <div className="text-sm">Developed using HTML, CSS, JavaScript</div>

                <div className="flex gap-3 text-sm">
                    <div className={`bg-primary text-black px-2 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp5'] ? " hover:text-yellow-500":""}`}>HTML</div>
                    <div className={`bg-primary text-black px-2 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp5'] ? " hover:text-yellow-500":""}`}>CSS</div>
                    <div className={`bg-primary text-black px-2 py-1 rounded-lg font-semibold transition-all ${isMouseEnter['exp5'] ? " hover:text-yellow-500":""}`}>JavaScript</div>
                </div>
            </div>
         </div>


       </div>
        
       
        
   
    )
}
export default Experience;