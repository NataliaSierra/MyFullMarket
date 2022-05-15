import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { UIButtons } from '../../Main-UI-Components/UIButtons/UIButtons.jsx';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  
export const UISeeMyProducts = ({ uidProduct, typeProduct, imgProduct, nameProduct, conditionProduct}) => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    const [text, setText] = useState(
      window.localStorage.getItem('text')
    )
    const saveID = async(uidProduct) => {
        try {
          setText(text)
          window.localStorage.setItem("text", uidProduct)
        }
        catch (error){
          console.log(error);
        
      }
    }

      const featuresProduct = async () => {
        await fetch(`https://backend-fullmarket-py.herokuapp.com//getoneproduct/${uidProduct}`)
        .then(res => res.json())
        .then(data => console.log(data))
      }
  
  const deleteProduct = async(event)=>{
    axios
        .delete(
          `https://backend-fullmarket-py.herokuapp.com//deleteproduct/${uidProduct}`,
          alert("ELIMINADO"),
        )
        .then()
        .catch((error) => {
          console.log(error);
        });
      event.preventDefault();
  
  }
  
  
  const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">ELIMINAR PRODUCTO</h2>
        <p id="simple-modal-description">
          ¿Estas seguro de eliminar {nameProduct}?.
        </p>
        <button type="button" onClick={deleteProduct}>
          ELIMINAR
        </button>
        <button type="button" onClick={handleClose}>
          CANCELAR
        </button>
      </div>)
  
  
  
  return (
    <>
    <div className='header-Card'>
      <h1>{typeProduct}</h1>
      {/* <h1>{uidProduct}</h1> */}
      <div className='body-Card'>
        <div className='img-Card'>
          <img src={imgProduct} onClick={featuresProduct}  className='img-Card' alt={nameProduct}></img>
        </div>
        <h2>{nameProduct}</h2>
        <p>Estado: {conditionProduct}</p>
        <div className='apply-Product'>
          <NavLink to="/EditMyProduct"><UIButtons  classButtons = "btn-Apply" onClick={() => saveID(uidProduct)} nameButtons = "Editar"></UIButtons></NavLink> 
        </div>
        <div className='apply-Product'>
          <NavLink to=""><UIButtons classButtons = "btn-Apply" onClick={handleOpen} nameButtons = "Eliminar"></UIButtons></NavLink> 
        </div>
      </div>
    </div>
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}>
        {body}
      </Modal>
    </div>
    
    </>
  )
}
