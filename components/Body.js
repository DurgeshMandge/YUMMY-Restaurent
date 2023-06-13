import {RestList} from "../constants.js";
import { imageURL } from "../constants.js";

const Card = ({cloudinaryImageId,name,cuisines,city}) =>{
    return (
        <div className="card">
            <img src= {imageURL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{city}</h4>
            <h6>{cuisines.join(", ")}</h6>
        </div>
    );
}
    
const Body = () =>{
    return (
    <div className="cardList">
        {RestList.map((rest)=>{
            return (<Card {...rest.data} {...rest.data.slugs} key={rest.data.id}/>);
        })}
    </div>
    );
}

export default Body;