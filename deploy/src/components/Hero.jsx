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

                    <p className="text-dim text-lg mb-8" style={{ maxWidth: '32rem' }}>
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
                        <div className="flex" style={{ marginLeft: '0' }}>
                            {/* Simulated avatars */}
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--bg-dark)', backgroundColor: '#4B5563', marginRight: '-12px' }}></div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--bg-dark)', backgroundColor: '#6B7280', marginRight: '-12px' }}></div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--bg-dark)', backgroundColor: '#9CA3AF' }}></div>
                        </div>
                        <p className="text-sm text-dim">Trusted by <span className="text-white font-bold">100k+ users</span></p>
                    </div>
                </div>

                <div className="hero-visual relative flex justify-center" style={{ perspective: '1000px' }}>
                    {/* Abstract 3D Dashboard Representation */}
                    <div className="card-3d-main animate-float" style={{
                        width: '100%',
                        maxWidth: '400px',
                        backgroundColor: 'rgba(15, 22, 35, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        position: 'relative'
                    }}>
                        <div className="flex justify-between text-dim mb-4">
                            <span>Current Balance</span>
                            <i data-lucide="more-horizontal"></i>
                        </div>
                        <div className="font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>$124,592.00</div>

                        <div style={{ height: '80px', width: '100%', marginBottom: '1.5rem', position: 'relative' }}>
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

                        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.75rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f97316' }}></span> BTC +2.4%
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.75rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></span> ETH +1.8%
                            </div>
                        </div>

                        {/* Floating Notification - Hidden on mobile */}
                        <div className="hidden md:flex" style={{
                            position: 'absolute',
                            top: '-24px',
                            right: '-24px',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '1rem',
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <div style={{ padding: '0.5rem', backgroundColor: '#dcfce7', borderRadius: '50%' }}>
                                <i data-lucide="arrow-down-left" style={{ color: '#16a34a', width: '20px', height: '20px' }}></i>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Received</div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>+$4,200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
window.Hero = Hero;
