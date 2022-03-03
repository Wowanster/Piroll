import React from 'react';
import style from './ModalFoto.module.scss';


const ModalFoto=(modal)=>{
   
    return(
        <div className={style.background} >
            <img src={modal.modalfoto} alt='foto' className={style.foto}/>
        </div>
    )

}
export default ModalFoto;