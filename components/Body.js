import { useState } from "react";
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

        //1. Hooks
        //2. Onchange Functionality (update searchText -> e.target.value)
        //3. Onclick functionality  (update restList -> filter data)
        //4. Mapping Functionality
        //5. Filtering Functionality
        
const Body = () =>{


    //---->     Filtering Functionality

    function filterData(Restaurent,searchText){
        return (Restaurent.filter((rest)=>rest.data.name.includes(searchText)));
    }


    //---->     Hooks

    const [searchText,setSearchText]=useState("");
    const [Restaurants,setRestList]=useState(RestList);

    return (
    <>
    <div className="body">
        <input 
            type="text"
            placeholder="search"
            value={searchText}

    //---->   Onchange Functionality
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
        />

        <button type="submit"

    //---->      Onclick functionality

            onClick={
                ()=>{setRestList(filterData(Restaurants,searchText));
            }}
        >Search</button>
    </div>

    <div className="cardList">

{/*  //----> Mapping Functionality                                  */}

        {Restaurants.map((rest)=>{
            return (<Card {...rest.data} {...rest.data.slugs} key={rest.data.id}/>);
        })}

    </div>
    
    </>
    );
}

export default Body;
