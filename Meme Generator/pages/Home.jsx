import React, {useEffect,useState} from 'react';
import MemeCard from '../components/Card';
import { Memes } from '../api/memes';

const Home = ()=>{

    const [data,setdata] = useState([])
    const memes = Memes();
    console.log(memes)
    useEffect(()=>{ memes.then((meme)=>setdata(meme.data.memes))
       
    },[])
    return (
        <div className='row'>
             {data.map((e)=><MemeCard img={e.url}  title={e.name}/>)}
        </div>
    )
}

export default Home;