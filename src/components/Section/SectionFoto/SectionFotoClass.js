import * as axios from 'axios';
import React from 'react';
import classes from './SectionFoto.module.scss';
import Preloader from '../PreLoaded/Preloader';
import ModalFoto from '../ModalFoto/ModalFoto'

class SectionFoto extends React.Component{
 componentDidMount(){
  if(this.props.images.length===0){
    this.props.toogleIsFetching(true);
    axios.get(`http://localhost:3008/images?_page=1&_limit=8`)
    .then(response=>{
      this.props.setImages(response.data);
      this.props.setTotalCount(+response.headers["x-total-count"]);
      this.props.toogleIsFetching(false);
    })
  }
 }

 loadMore=(e)=>{
  this.props.loadMore(e)
  this.props.toogleIsFetching(true);
  axios.get(`http://localhost:3008/images?_page=${this.props.page}&_limit=4`)
  .then(response=>{
    this.props.setImages(response.data);
    this.props.toogleIsFetching(false);
  })
}
modalFoto=(e)=>{
 
  this.props.setModalFoto(e.target.childNodes[0].attributes[0].nodeValue)
}

  render(){
    
    let images = this.props.images.length>0 ? this.props.images.map( n=>
      <a href="# " className = { classes.item } key={n.id} onClick={(e)=>{this.modalFoto(e)}}>
        <img src = { n.url } className={ classes.foto } alt="images"/>
        </a>) : <span></span>

    return (
      <>
      {this.props.isFetching? <Preloader/> :null}
      {this.props.modalFoto? <ModalFoto modalfoto={this.props.modalFoto}/> :null}
      <section className="section">
       <div className = { classes.wrapper }>
         { images }
       </div>
       {this.props.images.length<this.props.totalCount?<button  className = { classes.load }  onClick={(e)=>{this.loadMore(e)}}>load more work</button>:null}
     </section>
     </>
    )
  }
}
 

export default SectionFoto;
