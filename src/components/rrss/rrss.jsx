import './rrss.css'

export const Rrss = ( props ) => {
    const { informacion } = props
    return(
        <>
            <div className='Rrss-container'>
                { informacion.map( each =>
                    <Iconos
                        key={ each.id } { ...each }
                    />    
                )}
            </div>
        </>
    )
}
const Iconos = ( props ) => {
    const { icono , alt } = props
    return(
        <>
            <a href="#">
                <img src={icono} alt={alt} />
            </a>
        </>
    )
}