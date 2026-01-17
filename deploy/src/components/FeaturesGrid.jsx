const FeaturesGrid = () => {
    const features = [
        {
            icon: "arrow-right-left",
            title: "Instant Conversion",
            desc: "Swap between 50+ fiat and crypto currencies instantly with zero hidden fees."
        },
        {
            icon: "wallet",
            title: "Smart Wallet",
            desc: "Secure multi-currency wallet with auto-invest features and spending analytics."
        },
        {
            icon: "credit-card",
            title: "Virtual Cards",
            desc: "Generate disposable cards for safe online shopping or create permanent virtual cards."
        },
        {
            icon: "users",
            title: "P2P Payments",
            desc: "Send money to friends globally using just their email or phone number. Free."
        },
        {
            icon: "trending-up",
            title: "Earn Yield",
            desc: "Earn up to 5% APY on your USD and EUR balances, paid out daily."
        },
        {
            icon: "shield-check",
            title: "Bank-Grade Security",
            desc: "Your funds are safeguarded with advanced encryption and fraud monitoring."
        }
    ];

    return (
        <section id="features" className="section-padding relative">
            {/* Ambient Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                background: 'radial-gradient(circle at 0% 50%, rgba(123, 44, 191, 0.1), transparent 50%)',
                width: '50%',
                height: '100%',
                pointerEvents: 'none'
            }}></div>

            <div className="container relative" style={{ zIndex: 10 }}>
                <div className="text-center" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                    <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: 1.1 }}>
                        Everything you need. <br /> <span className="text-dim">Nothing you don't.</span>
                    </h2>
                    <p className="text-dim" style={{ maxWidth: '42rem', margin: '0 auto', fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                        From daily spending to long-term investing, Doughbridge gives you the tools to take control of your financial future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'clamp(1rem, 3vw, 1.5rem)' }}>
                    {features.map((feat, i) => (
                        <div className="card" key={i} style={{
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '16px',
                            padding: 'clamp(1.25rem, 4vw, 2rem)',
                            transition: 'transform 0.3s, border-color 0.3s'
                        }}>
                            <div style={{
                                width: 'clamp(40px, 10vw, 48px)',
                                height: 'clamp(40px, 10vw, 48px)',
                                backgroundColor: 'rgba(0,255,148,0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                                transition: 'transform 0.3s'
                            }}>
                                <i data-lucide={feat.icon}></i>
                            </div>
                            <h3 className="font-bold" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', marginBottom: '0.75rem' }}>{feat.title}</h3>
                            <p className="text-dim" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', lineHeight: 1.6 }}>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
window.FeaturesGrid = FeaturesGrid;
