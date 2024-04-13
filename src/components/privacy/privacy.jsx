import './privacy.css'

export const Privacy = ( props ) => {
    const { informacion } = props

    return(
        <>
            <div className='Politicas-container'>
                <div className='Politicas-enlaces'>
                { informacion.map( each =>
                    <Parrafo
                        key={ each.id } { ...each }
                    />    
                )}
                </div>
            </div>
        </>
    )
}
const Parrafo = ( props ) => {
    const { nombre } = props
    return(
        <>
            <a href='#' className='Politicas-a'>{nombre}</a>
        </>
    )
}