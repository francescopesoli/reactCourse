import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
             role="navigation">
            <div className="px-4 cursor-pointer md:hidden">Menu</div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/about" className="p-4">About</Link>
                <Link to="/contacts" className="p-4">Contacts</Link>
                <Link to="/cities" className="p-4">Cities</Link>
                <Link to="/cards-children" className="p-4">Cities v.2</Link>
            </div>
        </nav>
    );
}

export default Navbar;