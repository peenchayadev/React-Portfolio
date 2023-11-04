import Education from "../Education";
import Experience from "../Experience";

const RightSection =()=> {
    return(
        <div className="grid gap-y-20 px-5">
          <Education/>
          <Experience/>
          <div className>Experience</div>
          <div>Experience</div>
        
        </div>
    )
}
export default RightSection;