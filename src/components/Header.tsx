import styless from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styless.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
        </header> 
    )
}