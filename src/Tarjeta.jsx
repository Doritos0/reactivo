import './App.css'


export function Tarjeta( { userName, name, isFollowing }) {

    
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://github.com/Doritos0.png`}
                />
                <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button' >
                <span className='tw-followCard-text'>Seguir</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
            </article>
    )
}