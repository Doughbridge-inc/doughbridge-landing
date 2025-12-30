const VirtualCardSection = () => {
    return (
        <section id="card" className="section-padding overflow-hidden">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 flex justify-center perspective-1000">
                        <div className="relative group cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
                            {/* The Card */}
                            <div className="relative w-full max-w-[340px] aspect-[1.586] md:w-[400px] md:h-[250px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-500 transform group-hover:rotate-y-12 group-hover:rotate-x-6 z-20 flex flex-col justify-between overflow-hidden mx-auto">
                                {/* Card Noise/Texture Overlay (optional, sim via gradient) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                                <div className="flex justify-between items-start relative z-10">
                                    <span className="font-heading font-bold text-xl tracking-wide">Doughbridge</span>
                                    <i data-lucide="wifi" className="transform rotate-90 opacity-80"></i>
                                </div>

                                <div className="w-12 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md relative z-10 shadow-sm"></div>

                                <div className="font-mono text-2xl tracking-widest flex gap-4 relative z-10 text-white shadow-black/10 drop-shadow-md">
                                    <span>4242</span> <span>••••</span> <span>••••</span> <span>8892</span>
                                </div>

                                <div className="flex justify-between items-end relative z-10">
                                    <div>
                                        <div className="text-[10px] uppercase text-white/60 tracking-wider">Card Holder</div>
                                        <div className="text-sm font-semibold tracking-wide">ALEX M. DESIGNER</div>
                                    </div>
                                    <div className="font-bold italic text-2xl">VISA</div>
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary blur-[80px] opacity-20 -z-10 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-bold mb-6">Global Spending <br /> <span className="text-gradient">Made Simple.</span></h2>
                        <ul className="flex flex-col gap-6 mb-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                                    <i data-lucide="check" className="w-3 h-3 text-primary"></i>
                                </div>
                                <div>
                                    <strong className="block text-lg mb-1">Instant Virtual Cards</strong>
                                    <span className="text-dim">Create a card for one-time use or recurring subscriptions.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                                    <i data-lucide="check" className="w-3 h-3 text-primary"></i>
                                </div>
                                <div>
                                    <strong className="block text-lg mb-1">Real-time Notifications</strong>
                                    <span className="text-dim">Get alerted the second you spend.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                                    <i data-lucide="check" className="w-3 h-3 text-primary"></i>
                                </div>
                                <div>
                                    <strong className="block text-lg mb-1">Zero FX Fees</strong>
                                    <span className="text-dim">Spend abroad at the real exchange rate.</span>
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
