const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

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
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-dim hover:text-white transition">Features</a>
                    <a href="#card" className="text-dim hover:text-white transition">Card</a>
                    <a href="#invest" className="text-dim hover:text-white transition">Invest</a>
                    <a href="#pricing" className="text-dim hover:text-white transition">Pricing</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="btn btn-glass">Log In</button>
                    <button className="btn btn-primary">Get App</button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <i data-lucide={isOpen ? "x" : "menu"}></i>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu absolute top-full left-0 w-full bg-card p-4 flex flex-col gap-4 border-b border-white/10">
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#card" onClick={() => setIsOpen(false)}>Card</a>
                    <a href="#invest" onClick={() => setIsOpen(false)}>Invest</a>
                    <div className="mobile-actions flex flex-col gap-2">
                        <button className="btn btn-glass w-full">Log In</button>
                        <button className="btn btn-primary w-full">Get App</button>
                    </div>
                </div>
            )}
        </nav>
    );
};
window.Navbar = Navbar;
