import './Nav.scss'
const Nav = () => {

    return(
        <div className="nav">
            <select>
                <option>Português</option>
                <option>Inglês</option>
            </select>
            <button className="btn-entrar">Entrar</button>
        </div>
        
    )
}

export default Nav;