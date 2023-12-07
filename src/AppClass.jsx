import React, { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends React.Component{

  render(){
    let image_arr = this.props.imageData();
    return(
    <>
      <h1>Gallery</h1>
      <div id="parent_div">
      <div className="child_div">
            <img src={image_arr[0].img} className="image" id="image" alt=""/>
            <img src={image_arr[1].img} className="image" id="image" alt=""/>
            <img src={image_arr[2].img} className="image" id="image" alt=""/>
            <img src={image_arr[3].img} className="image" id="image" alt=""/>
      </div>
      </div>
    </>
    )
  }
}
