import React, {useEffect,useState} from 'react';
import { UILogos } from '../../../UI/Main-UI-Components/UILogos/UILogos';
import { UISeeMyProducts } from '../../../UI/SeeMyProducts-UI-Components/UISeeMyProducts/UISeeMyProducts';

export const LayoutMyProducts = () => {
    const URL = 'https://backend-fullmarket-py.herokuapp.com/getallproducts';
  
    const [products, setProducts] = useState([])
    
    const mostrar = async () => {
       await fetch(URL)
       .then(res => res.json())
       .then(data => setProducts(data))
       
     }
    useEffect(() => {
      mostrar();    
    },[])
    // console.log(products);
  
  return (
    <main className='main-products'>       
    {         
        products.map ( element => (
           <UISeeMyProducts
           key = {element.name + 1}
           uidProduct = {element.uid}
           typeProduct = {element.type}
           imgProduct = {element.imgProductURL}
           nameProduct = {element.name}
           conditionProduct = {element.condition}


           availabilityProduct = {element.availability}
           dateProduct = {element.date}
           descriptionProduct = {element.description}
           cityProduct = {element.city}
           />
        ))
     }    
  </main>
  )
}
