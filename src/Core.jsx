import './App.css'

export function Core(){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://github.com/Doritos0.png`}
                />
                <div className='tw-followCard-info'>
                <strong>Usuario</strong>
                <span className='tw-followCard-infoUserName'>@cuenta</span>
                </div>
            </header>

            <aside>
                <button>
                <span className='tw-followCard-text'>Seguir</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
            </article>
    )
}

{/*
    
    
        <article>
            <header>
                <img alt="imagen" src="https://github.com/Doritos0.png" />
                <div>
                    <strong> Usuario </strong>
                    <span>@cuenta</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>*/}