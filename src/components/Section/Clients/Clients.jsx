import React from "react";
import { connect } from "react-redux";
import clases from "./Clients.module.scss";

const Clients = (props) => {

  let clients = props.clients.map((e) => (
    <div className={clases.clients__block} key={e.id}>
      <img src={e.url} alt="images" className={clases.clients__images} />
    </div>
  ));

  return (
    <section className={clases.section}>
      <div className={"container"}>
        <div className={clases.clients}>{clients}</div>
      </div>
    </section>
  );
};

const stateToProps = (state) => {
  return {
    clients: state.clients,
  };
};

export default connect(stateToProps)(Clients);
