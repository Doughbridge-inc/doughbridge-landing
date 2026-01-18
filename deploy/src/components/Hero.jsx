const Hero = () => {
    return (
        <section className="hero section-padding pt-24 md:pt-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 center pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,255,148,0.15), transparent 70%)', width: '100%', height: '100%' }}></div>

            <div className="container grid md:grid-cols-2 gap-8 items-center">
                <div className="hero-content relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm mb-6" style={{ borderColor: 'rgba(0,255,148,0.2)', backgroundColor: 'rgba(0,255,148,0.1)' }}>
                        <span className="w-2 h-2 rounded-full bg-primary" style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></span>
                        New: Zero Fee Transfers
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        The <span className="text-gradient">Financial OS</span> <br />
                        For The Future.
                    </h1>

                    <p className="text-dim text-lg mb-8 max-w-lg">
                        Manage your fiat, crypto, and investments in one unified platform.
                        Spend globally with the Doughbridge virtual card.
                    </p>

                    <div className="hero-cta flex flex-col md:flex-row gap-4 mb-10">
                        <button className="btn btn-primary">
                            Open Free Account <i data-lucide="arrow-right" className="ml-2 w-5"></i>
                        </button>
                        <button className="btn btn-glass">
                            <i data-lucide="play-circle" className="mr-2 w-5"></i> Watch Demo
                        </button>
                    </div>

                    <div className="trust-badges flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {/* Simulated avatars */}
                            <div className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-600" style={{ backgroundColor: '#4B5563', border: '2px solid var(--bg-dark)' }}></div>
                            <div className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-500" style={{ backgroundColor: '#6B7280', border: '2px solid var(--bg-dark)', marginLeft: '-12px' }}></div>
                            <div className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-400" style={{ backgroundColor: '#9CA3AF', border: '2px solid var(--bg-dark)', marginLeft: '-12px' }}></div>
                        </div>
                        <p className="text-sm text-dim">Trusted by <span className="text-white font-bold">100k+ users</span></p>
                    </div>
                </div>

                <div className="hero-visual relative flex justify-center" style={{ perspective: '1000px' }}>
                    {/* Abstract 3D Dashboard Representation */}
                    <div className="card-3d-main w-full max-w-md bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-float" style={{
                        backgroundColor: 'rgba(15, 22, 35, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        maxWidth: '400px'
                    }}>
                        <div className="flex justify-between text-dim mb-4">
                            <span>Current Balance</span>
                            <i data-lucide="more-horizontal"></i>
                        </div>
                        <div className="text-4xl font-bold mb-6">$124,592.00</div>

                        <div className="h-24 w-full mb-6 relative">
                            {/* CSS Graph Line */}
                            <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none">
                                <path d="M0,20 C20,20 20,5 40,15 S60,25 80,10 S100,20 100,20" fill="none" stroke="var(--primary)" strokeWidth="2" />
                                <path d="M0,20 C20,20 20,5 40,15 S60,25 80,10 S100,20 100,20 V30 H0 Z" fill="url(#grad)" opacity="0.2" />
                                <defs>
                                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: 'var(--primary)', stopOpacity: 0 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-white/5 px-3 py-2 rounded-lg flex items-center gap-2 text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                <span className="w-2 h-2 rounded-full bg-orange-500" style={{ backgroundColor: '#f97316' }}></span> BTC +2.4%
                            </div>
                            <div className="bg-white/5 px-3 py-2 rounded-lg flex items-center gap-2 text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                <span className="w-2 h-2 rounded-full bg-blue-500" style={{ backgroundColor: '#3b82f6' }}></span> ETH +1.8%
                            </div>
                        </div>

                        {/* Floating Notification */}
                        <div className="absolute -top-6 -right-6 bg-white text-black p-4 rounded-xl shadow-lg flex items-center gap-3 hidden md:flex" style={{
                            position: 'absolute',
                            top: '-24px',
                            right: '-24px',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '1rem',
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                        }}>
                            <div className="p-2 bg-green-100 rounded-full" style={{ backgroundColor: '#dcfce7' }}>
                                <i data-lucide="arrow-down-left" className="text-green-600 w-5 h-5" style={{ color: '#16a34a' }}></i>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Received</div>
                                <div className="font-bold text-lg">+$4,200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
window.Hero = Hero;
