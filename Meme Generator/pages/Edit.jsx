import React, {useState, createRef} from "react";
import { Button } from "react-bootstrap";
import MemeCard from "../components/Card";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const Edit = () => {
 
    const ref = createRef();
    const [count,setcount] = useState(0);
    const [params] = useSearchParams();
    console.log(params.get('url'))

    const addText = () => {
        setcount(count+1)
    }
    return (
    <div>   
    <div ref={ref} style={{width:"700px", border: "1px solid"}}classname ="meme mt-5 mb-5">
       <img src={params.get("url")} width="250px" alt="No img found"/>
       {
        Array(count).fill(0).map((e) => (<Text/>))
       }
    </div>
    <Button onClick={addText} style={{marginTop:"10px"}}>Add Text</Button>
    <Button variant="success" onClick={(e)=>{exportComponentAsJPEG(ref)}} style={{marginTop:"10px", marginLeft:"10px"}}>Save</Button>
    </div>
    )
}

export default Edit;