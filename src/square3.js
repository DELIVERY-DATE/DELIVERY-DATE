// import React, { Component } from 'react';
// import {
//     Rectangle
// } from 'draw-shape-reactjs';

// export class Map extends Component {
//     render() {
//         return (
//             <div className="map">
//                 <Rectangle
//                     corner={[430, 160]}
//                     height={50}
//                     width={100}
//                     color='#FF0000'
//                 />
                
//             </div>
//         )
//     }
// }

// export default Map

import React, { Component } from 'react'
import { Stage, Layer, Rect, Text} from 'react-konva';
import "./Map.css"


class Square3 extends Component {
    render() {
        return (
      

                 
               
                <div className= "konvajs-content3">
                    
                <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
         x={25}
         y={10}
         width={20}
         height={20}
         fill="yellow"
         shadowBlur={10}
        />
         <Text text="Overnight - $79.99" 
         fontSize={15}  
         x={75}
         y={12}/>
         
      </Layer>
      
      
    </Stage>

   
    
    </div>

            
        )
    }
}

export default Square3


 
