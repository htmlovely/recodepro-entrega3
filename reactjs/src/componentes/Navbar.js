import React from 'react';

function Navbar() {
    return (
        <div className="App">
            <header>
                <nav class="menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/destinos">Destinos</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;