import './App.css'
import { Tarjeta } from './Tarjeta'

const usuarios = [
    {
        'userName' : 'Doritos0',
        'name' : 'Marcelo',
        'initialIsFollowing' : true
    },
    {
        'userName' : 'basto115',
        'name' : 'Basti',
        'initialIsFollowing': true
    },
    {
        'userName' : 'AstolfoSupremacy',
        'name' : 'Andres',
        'initialIsFollowing': false
    },
    {
        'userName' : 'Q-Quinn',
        'name' : 'Joaquin',
        'initialIsFollowing': false
    }
]

export function Core(){
    return (
        <>
            {
                usuarios.map(({userName, name, initialIsFollowing})=>(
                    <Tarjeta userName={userName} 
                    name={name} 
                    initialIsFollowing={initialIsFollowing}
                    key={userName} //IDENTIFICADOR UNICO
                    ></Tarjeta>
                ))
            }
        </>
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