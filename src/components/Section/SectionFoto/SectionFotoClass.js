import React from "react";
import classes from "./SectionFoto.module.scss";
import Preloader from "../PreLoaded/Preloader";
import ModalFoto from "../ModalFoto/ModalFoto";


class SectionFoto extends React.Component {
  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.addImages(1, 8)
    }
  }

  loadMore = () => {
    this.props.loadImages(this.props.page, 4)
  };

  modalFoto = (e) => {
    this.props.tooglemodal(true);
    this.props.setModalFoto(e.target.childNodes[0].attributes[0].nodeValue);
  };

  render() {
    let images =
      this.props.images.length > 0 ? (
        this.props.images.map((n) => (
          <button
            className={classes.item}
            key={n.id}
            onClick={(e) => {
              this.modalFoto(e);
            }}
          >
            <img src={n.url} className={classes.foto} alt="images" />
          </button>
        ))
      ) : null;

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        {this.props.isOpen ? (
          <ModalFoto
            modalfoto={this.props.modalFoto}
            tooglemodal={this.props.tooglemodal}
          />
        ) : null}
        <section className="section">
          <div className={classes.wrapper}>{images}</div>
          {this.props.images.length < this.props.totalCount ? (
            <button
              className={classes.load}
              onClick={() => {
                this.loadMore();
              }}
            >
              load more work
            </button>
          ) : null}
        </section>
      </>
    );
  }
}

export default SectionFoto;
