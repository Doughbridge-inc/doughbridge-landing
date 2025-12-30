const Footer = () => {
    return (
        <footer className="footer bg-[#020408] border-t border-white/5 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5">
                        <img src="/images/logo.png" alt="DoughBridge" className="h-14 mb-6" />
                        <p className="text-dim mb-8 max-w-sm">The financial operating system built for the modern digital economy. Secure, fast, and borderless.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors"><i data-lucide="twitter" className="w-5"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors"><i data-lucide="instagram" className="w-5"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors"><i data-lucide="linkedin" className="w-5"></i></a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Product</h4>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="zap" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Features</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="user" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Personal</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="briefcase" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Business</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="tag" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Pricing</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="info" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="users" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Careers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="newspaper" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group">
                                    <i data-lucide="mail" className="w-4 h-4 text-dim group-hover:text-primary transition-colors"></i>
                                    <span className="text-dim group-hover:text-white transition-colors">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-dim text-sm">
                    <p>&copy; {new Date().getFullYear()} Doughbridge Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
window.Footer = Footer;
