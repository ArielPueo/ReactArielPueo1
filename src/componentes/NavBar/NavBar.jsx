import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const narutoLogo = "./narutoicon.png"
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className='narutoLogo' src={narutoLogo} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Noticias
                        </li>
                        <li className="nav-item">
                            Animes
                        </li>
                        <li className="nav-item">
                            Ropa
                        </li>
                        <li className="nav-item">
                            Accesorios
                        </li>
                    </ul>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar