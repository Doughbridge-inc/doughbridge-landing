const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content flex justify-between items-center">
                <a href="#" className="logo text-2xl font-bold text-white no-underline" style={{ textDecoration: 'none' }}>
                    Doughbridge<span className="text-primary">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 desktop-nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#card" className="nav-link">Card</a>
                    <a href="#invest" className="nav-link">Invest</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4 desktop-nav">
                    <button className="btn btn-glass">Log In</button>
                    <button className="btn btn-primary">Get App</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <a href="#features" className="nav-link" onClick={closeMobileMenu}>Features</a>
                <a href="#card" className="nav-link" onClick={closeMobileMenu}>Card</a>
                <a href="#invest" className="nav-link" onClick={closeMobileMenu}>Invest</a>
                <a href="#pricing" className="nav-link" onClick={closeMobileMenu}>Pricing</a>
                <div className="flex flex-col gap-4" style={{ marginTop: '1rem' }}>
                    <button className="btn btn-glass" onClick={closeMobileMenu}>Log In</button>
                    <button className="btn btn-primary" onClick={closeMobileMenu}>Get App</button>
                </div>
            </div>
        </nav>
    );
};
window.Navbar = Navbar;
