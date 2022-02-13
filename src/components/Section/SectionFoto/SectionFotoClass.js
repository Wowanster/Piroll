import * as axios from "axios";
import React from "react";
import classes from "./SectionFoto.module.scss";


class SectionFoto extends React.Component{

  constructor(props){
  super(props)
  axios.get("http://localhost:3008/images").then(response=>{
      this.props.setImages(response.data)
    })
}

  render(){
   
    let images = this.props.images.length>0 ? this.props.images.map( n=>
      <a href="# " className = { classes.item } key={n.id}>
        <img src = { n.url } className={ classes.foto }  alt="images"/>
        </a>) : <span></span>

    return (
      <section className="section">
        <div className = { classes.wrapper }>
          { images }
        </div>
        <button  className = { classes.load } >load more work</button>
      </section>
    );
  
}
}
 

export default SectionFoto;
