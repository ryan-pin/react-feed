import style from '../style/Header.module.css'

import valLogo from '../assets/valorant-logo.png';

export function Header(){
    return (
        <header className={style.header}>
            <img src={valLogo} alt="Valorant Logo" />
            <strong>DevNet</strong>
        </header>

    )
}