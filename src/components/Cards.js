import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
    const[readmore,setReadmore] = useState(false)
    const description = readmore?`${props.info}`:`${props.info.substring(0,200)}...`;  
    function readmoreHandler(){
        setReadmore(!readmore)
    }
    
    return (
    <Card className='card'>
      <img className='tour-cityimg' src={props.image} />
      <div className='tour-info'>
        <div className='tour-detail'>
            <h5 className='tour-cityname'>{props.name}</h5>
            <h6 className='tour-price text-right'>{props.price}</h6>
        </div>
        <div className='tour-description py-2'>
           {description}
           <span className='readmore' onClick={readmoreHandler}>{readmore?" show less":" read mode"}</span>
        </div>
        <div className='text-center mb-2'>
          <Button variant="outline-danger" onClick={()=>props.removeTour(props.id)}>Not Interested</Button>
        </div>
      </div>
    </Card>  
  )}

