import { useState } from 'react'
import './App.css'


export function Tarjeta( { userName, name, initialIsFollowing}) {
/* para que estos props tenga un valor por defecto cuando
se envien vacios
---->  export function Nombre ({prop = 'valor por defecto'}) {}
*/

    
    //STATE
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //OPERADORES TERNARIOS
    const textoBoton = isFollowing === true ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing === true ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    
    console.log('ESTA CLASE ESTA AL INICIO ',buttonClassName)


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt={`El avatar de ${userName}`} //IMPORTANTE ESTO SE HACE CON COMILLAS INVERTIDAS
                src={`https://github.com/${userName}.png`}
                />
                <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{textoBoton}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

