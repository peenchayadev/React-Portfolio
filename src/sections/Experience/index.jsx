import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adminPic from "../../assets/admin.png"
import { useState } from "react";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import TextExp from "../../components/textExp";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Btn from "../../components/Btn";
import Description from "../../components/Description";
import Tech from "../../components/Tech";
import {data} from "../../contents/Experience"

const SECTION_ID = "Experience-Section"

const Experience =()=> {
    const [isMouseEnter,setIsMouseEnter] = useState({});

    return(
        <div id={SECTION_ID}>
            
        <div className='font-semibold text-md'>Experience</div>
        {
            data.map(({
                data,
                title,
                link,
                materials,
                description,
                Skill,
                picExp,
            },index) =>(

        <div 
            key={`${SECTION_ID}-${index}-${title.replaceAll(" "," ")}`}
            className={`grid grid-cols-[25%_75%] transition-all ${isMouseEnter[`${SECTION_ID}-${index}`]?  "bg-gray-800":""} rounded-md px-2 py-6`}
            onMouseEnter={()=> setIsMouseEnter({[`${SECTION_ID}-${index}`]: true})}
            onMouseLeave={()=> setIsMouseEnter({[`${SECTION_ID}-${index}`]: false})}
        >
            <div>
                <TextExp isHightLight={isMouseEnter[[`${SECTION_ID}-${index}`]]}>{data}</TextExp>
                <Picture picture={adminPic} title={title}/>
            </div>

            <div className="grid gap-y-4">
                <TitleLink isHightLight={isMouseEnter[[`${SECTION_ID}-${index}`]]} title={title} link={link}/>

                <div className="flex gap-4 text-lg">
                    {
                        materials.map((e,i) => (
                            <Btn key={`${e}-btn-${i}`} icon={e.type} link={e.link}/>
                        ))
                    }
                </div>
                    {
                        description.map((e,i) => (
                            <Description key={`${e}-des-${i}`} description={e}/>
                        ))
                    }
                    {
                        Skill.map((e,i) => (
                            <Tech key={`${e}-skill-${i}`} isHightLight={isMouseEnter[[`${SECTION_ID}-${index}`]]} data={e}/>
                        ))
                    }
                
            </div>
        </div>
            ))
        }
       </div>
    )
}
export default Experience;