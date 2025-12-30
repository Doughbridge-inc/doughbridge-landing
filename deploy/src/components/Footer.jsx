const Footer = () => {
    // Force icon re-render on mount
    React.useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, []);

    return (
        <footer className="footer bg-[#050505] text-white pt-24 pb-12 font-sans border-t border-white/5 tracking-normal">
            <div className="container mx-auto px-6">

                {/* Main Grid: 5 Columns (1 Brand + 4 Links) */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 mb-24">

                    {/* Column 1: Brand & Mission */}
                    <div className="col-span-2 md:col-span-1 pr-4">
                        <h3 className="text-xl font-bold text-white mb-6">Doughbridge.</h3>
                        <p className="text-sm text-gray-500 leading-7 font-normal mb-8">
                            Powering the future of borderless finance. Reliable, compliant infrastructure for the modern economy.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i data-lucide="twitter" className="w-4 h-4"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i data-lucide="linkedin" className="w-4 h-4"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i data-lucide="github" className="w-4 h-4"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-6">Product</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Global Payments</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Corporate Cards</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Treasury Management</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Capital</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Use Cases */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-6">Use Cases</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Startups</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Enterprise</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">SaaS Platforms</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Marketplaces</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">API Reference</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Guides</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Customer Stories</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-6">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Press</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Trust & Legal */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <p className="text-xs text-gray-600">© 2025 Doughbridge Financial Inc.</p>
                        <div className="hidden md:block w-px h-3 bg-white/10"></div>
                        <div className="flex gap-6">
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Privacy</a>
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Terms</a>
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Licenses</a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-6 opacity-70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-500">System Operational</span>
                        </div>
                        <div className="flex items-center gap-2" title="ISO 27001 Certified">
                            <i data-lucide="shield-check" className="w-3 h-3 text-gray-500"></i>
                            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-500">ISO 27001</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
window.Footer = Footer;
