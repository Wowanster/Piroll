import React from "react";
import clases from "./Clients.module.scss";

const Clients = (props) => {
  let state = props.store.getState();
  let clients = state.clients.map((e) => (
    <div className={clases.clients__block} key={e.id}>
      <img src={e.url} alt="images" className={clases.clients__images} />
    </div>
  ));

  return (
    <section className={clases.section}>
      <div className={`container`}>
        <div className={clases.clients}>{clients}</div>
      </div>
    </section>
  );
};

export default Clients;
