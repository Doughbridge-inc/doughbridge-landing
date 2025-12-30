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
            <div className="absolute top-1/2 left-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 0% 50%, rgba(123, 44, 191, 0.1), transparent 50%)', width: '50%', height: '100%' }}></div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Everything you need. <br /> <span className="text-dim">Nothing you don't.</span></h2>
                    <p className="text-dim max-w-2xl mx-auto">From daily spending to long-term investing, Doughbridge gives you the tools to take control of your financial future.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, i) => (
                        <div className="card hover:border-primary/50 group" key={i}>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <i data-lucide={feat.icon}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                            <p className="text-dim">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
window.FeaturesGrid = FeaturesGrid;
