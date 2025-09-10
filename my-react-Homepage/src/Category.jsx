import React,{useState} from "react";

function Category(){
const [active,setActive] = useState("ALL");
  const categories = ["ALL", "NOVICE", "KIDS", "INTERMEDIATE +", "ADVANCED"];
return(
    <>
    <div className="btn-container">
        {
            categories.map((category)=>(
                <button key={category} className={`btn ${active === category ? "active" : ""}`} onClick={()=>{setActive(category)}}></button>
            ))
        }
    </div>
    
    </>
);

}

export default Category