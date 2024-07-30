import Link from 'next/link'; // Importa o componente Link do Next.js para navegação entre páginas.

const Navbar = () => { // Define o componente Navbar.
    return ( // Renderiza a barra de navegação.
        <nav>
            <ul>
                <li>
                    <Link href="/cases">Cadastro</Link> // Link para a página de cadastro.
                </li>
                {/* Outras rotas */}
            </ul>
        </nav>
    );
};

export default Navbar; // Exporta o componente Navbar.
