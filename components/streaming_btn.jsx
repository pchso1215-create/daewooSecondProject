import { Link } from "react-router-dom"

export default function Streaming({stAddres,stream}){

    return(
        <div className="streaming">
            <Link to={stAddres} >{stream}</Link>
        </div>
    )
}