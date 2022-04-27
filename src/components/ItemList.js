import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { enviosData } from "../Data/enviosData";
import Item from "./Item";

const ItemList = () => {

    const [envios, setEnvios] = useState([])

    useEffect(() => {
    getEnvios()
    }, [])
    
    const getEnvios = () => {
        const getEnviosPromise = new Promise((resolve, rejet) => { 
            setTimeout(() => {
              resolve( enviosData )  
            }, 2000);
        })

        getEnviosPromise.then( data => {
            setEnvios( data )
        })
    }


  return (
    <div>
        {envios.map( m => <Item key={m.id} item={m}/> )}
    </div>
  )
}
export default ItemList