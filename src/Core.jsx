import './App.css'
import { Tarjeta } from './Tarjeta'

export function Core(){
    return (
        <>
            <Tarjeta userName="Doritos0" name="Marcelo" isFollowing={true}/>
            <Tarjeta userName="Doritos0" name="Marcelo" isFollowing={false}/>
            <Tarjeta userName="Doritos0" name="Marcelo" />
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