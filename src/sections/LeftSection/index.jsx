import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection =()=> {
    return(
        <div className="px-3">
            <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[85vh]'>

            <Header/>
            <Navbar/>
            <Contact/>

            </div>
      </div>
    )
}
export default LeftSection;
