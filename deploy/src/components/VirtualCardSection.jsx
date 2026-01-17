const VirtualCardSection = () => {
    return (
        <section id="card" className="section-padding overflow-hidden">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 items-center" style={{ gap: 'clamp(2rem, 5vw, 4rem)' }}>
                    <div className="order-2 md:order-1 flex justify-center" style={{ perspective: '1000px' }}>
                        <div className="relative group cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
                            {/* The Card */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: 'clamp(280px, 80vw, 400px)',
                                aspectRatio: '1.586',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '16px',
                                padding: 'clamp(1rem, 3vw, 1.5rem)',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                transition: 'transform 0.5s ease'
                            }}>
                                {/* Card Noise/Texture Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)',
                                    pointerEvents: 'none'
                                }}></div>

                                <div className="flex justify-between items-start" style={{ position: 'relative', zIndex: 10 }}>
                                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: 'clamp(1rem, 4vw, 1.25rem)', letterSpacing: '0.05em' }}>Doughbridge</span>
                                    <i data-lucide="wifi" style={{ transform: 'rotate(90deg)', opacity: 0.8, width: 'clamp(18px, 5vw, 24px)', height: 'clamp(18px, 5vw, 24px)' }}></i>
                                </div>

                                <div style={{
                                    width: 'clamp(40px, 12vw, 48px)',
                                    height: 'clamp(28px, 9vw, 36px)',
                                    background: 'linear-gradient(to bottom right, #fbbf24, #d97706)',
                                    borderRadius: '6px',
                                    position: 'relative',
                                    zIndex: 10,
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}></div>

                                <div style={{
                                    fontFamily: 'monospace',
                                    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                                    letterSpacing: '0.15em',
                                    display: 'flex',
                                    gap: 'clamp(0.5rem, 2vw, 1rem)',
                                    position: 'relative',
                                    zIndex: 10,
                                    color: 'white',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    <span>4242</span> <span>••••</span> <span>••••</span> <span>8892</span>
                                </div>

                                <div className="flex justify-between items-end" style={{ position: 'relative', zIndex: 10 }}>
                                    <div>
                                        <div style={{ fontSize: 'clamp(8px, 2.5vw, 10px)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>Card Holder</div>
                                        <div style={{ fontSize: 'clamp(10px, 3vw, 14px)', fontWeight: 600, letterSpacing: '0.05em' }}>ALEX M. DESIGNER</div>
                                    </div>
                                    <div style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 5vw, 1.75rem)' }}>VISA</div>
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '75%',
                                height: '75%',
                                backgroundColor: 'var(--primary)',
                                filter: 'blur(80px)',
                                opacity: 0.2,
                                zIndex: -1,
                                transition: 'opacity 0.3s ease'
                            }}></div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
                            Global Spending <br /> <span className="text-gradient">Made Simple.</span>
                        </h2>
                        <ul className="flex flex-col gap-6 mb-10" style={{ gap: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                            <li className="flex items-start gap-4">
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(0,255,148,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '4px',
                                    flexShrink: 0
                                }}>
                                    <i data-lucide="check" style={{ width: '12px', height: '12px', color: 'var(--primary)' }}></i>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: 'clamp(1rem, 3vw, 1.125rem)', marginBottom: '4px' }}>Instant Virtual Cards</strong>
                                    <span className="text-dim" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>Create a card for one-time use or recurring subscriptions.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(0,255,148,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '4px',
                                    flexShrink: 0
                                }}>
                                    <i data-lucide="check" style={{ width: '12px', height: '12px', color: 'var(--primary)' }}></i>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: 'clamp(1rem, 3vw, 1.125rem)', marginBottom: '4px' }}>Real-time Notifications</strong>
                                    <span className="text-dim" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>Get alerted the second you spend.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(0,255,148,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '4px',
                                    flexShrink: 0
                                }}>
                                    <i data-lucide="check" style={{ width: '12px', height: '12px', color: 'var(--primary)' }}></i>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: 'clamp(1rem, 3vw, 1.125rem)', marginBottom: '4px' }}>Zero FX Fees</strong>
                                    <span className="text-dim" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>Spend abroad at the real exchange rate.</span>
                                </div>
                            </li>
                        </ul>
                        <button className="btn btn-primary">
                            Get Your Card
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
window.VirtualCardSection = VirtualCardSection;
