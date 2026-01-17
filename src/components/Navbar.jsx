const Navbar = () => {
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content flex justify-between items-center">
                <a href="#" className="logo text-2xl font-bold text-white no-underline">
                    Doughbridge<span className="text-primary">.</span>
                </a>

                {/* Desktop Links */}
                {/* Desktop Links */}
                {/* Desktop Links */}
                <div className="flex items-center gap-8 hidden md:flex">
                    <a href="#features" className="text-dim hover:text-white transition">Features</a>
                    <a href="#card" className="text-dim hover:text-white transition">Card</a>
                    <a href="#invest" className="text-dim hover:text-white transition">Invest</a>
                    <a href="#pricing" className="text-dim hover:text-white transition">Pricing</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="btn btn-glass">Log In</button>
                    <button className="btn btn-primary">Get App</button>
                </div>
            </div>


        </nav>
    );
};
window.Navbar = Navbar;
