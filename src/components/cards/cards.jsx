import './cards.css'

export const Card = ( props ) => {
    const { informacion , tipo } = props
    const backgroundColor = tipo === 'itemCards' ? '#F2F2F2' : '#ffffff';

    return(
        <>
            <div className='Card-container' style={{backgroundColor}}>
                { backgroundColor === '#ffffff' ? <h2 className='Card-h2'>Praise for Triage 1</h2> : '' }
                <div className='Card-grid'>
                    { informacion.map( each =>
                        <ItemCard
                            key={ each.id } { ...each }
                        />
                    )}
                </div>      
            </div>
        </>
    )
}

const ItemCard = ( props ) => {
    const { icono , texto , nombre } = props
    return(
        <div className={`${nombre}-item`}>
            <img className={`${nombre}-icon`} src={icono} alt="hola1" />
            <p className={`${nombre}-p`}>{texto}</p>
        </div>
    )
}