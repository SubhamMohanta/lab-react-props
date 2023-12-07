import './App.css';
import React from "react"




function App(props) {

  let image_arr = props.imageData();

  console.log(image_arr);

  return(<>
    <h1>Gallery</h1>
    <div id="parent_div">
    <div className="child_div">
          <img src={image_arr[0].img} className="image" id="image" alt=""/>
          <img src={image_arr[1].img} className="image" id="image" alt=""/>
          <img src={image_arr[2].img} className="image" id="image" alt=""/>
          <img src={image_arr[3].img} className="image" id="image" alt=""/>
    </div>
    </div>
  </>)
}

export default App;
