import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Btn = ({icon,link}) => {
    return(
        
            <a href={link} target="_blank" className="hover:scale-100 hover:text-yellow-500  transition-all"><FontAwesomeIcon icon={icon}/></a>

    )
}
export default Btn;