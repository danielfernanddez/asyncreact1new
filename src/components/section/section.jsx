import './section.css'
import { createContext, useContext } from "react";
const ContextoSection = createContext()
export const Section = (props) => {
    const { nombre, id, icono, altIcon, titulo, parrafo, imagen, altMobile } = props;

    return (
        <ContextoSection.Provider value={{nombre, id, icono, altIcon, titulo, parrafo, imagen, altMobile}}>
        <>
            <div className={`${nombre}-div`}>
                <ColumnaInfo/>
                <ColumnaImagen/>
            </div>
        </>
        </ContextoSection.Provider>
    );
}

const ColumnaInfo = () => {
    const { nombre , icono , altIcon , titulo , parrafo , altMobile } = useContext(ContextoSection)
    return(
        <div className={`${nombre}-info`}>
            <img className={`${nombre}-icon`} src={icono} alt={altIcon} />
            <h2 className={`${nombre}-h2`}>{titulo}</h2>
            <p className={`${nombre}-p`}>{parrafo}</p>
            {nombre !== 'Hero' ? '' : <img className='Hero-apple' src='/assets/download-hero.png' alt={altMobile} />}
        </div>
    )
}

const ColumnaImagen = () => {
    const { nombre , imagen , altMobile } = useContext(ContextoSection)
    return(
        <div className={`${nombre}-divmobile`}>
            <img className='Hero-mobile' src={imagen} alt={altMobile} />
        </div>
    )
}
