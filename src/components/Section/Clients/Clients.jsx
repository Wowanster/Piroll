import React from "react";
import clases from './Clients.module.scss';

const Clients = (props) => {
  
    let state=props.state.getState();
let clients=state.clients.map(e=> <div className = { clases.clients__img}>
    <img src = {e} alt="images"></img>
</div> )

    return(
        <section className = { clases.section }>
            <div className = { `container` }>
                <div className = { clases. clients }>
                    { clients }
                 </div>
            </div>
        </section>
    )
}

export default Clients;