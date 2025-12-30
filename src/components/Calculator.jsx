const Calculator = () => {
    const [amount, setAmount] = React.useState(1000);
    const [currency, setCurrency] = React.useState('USD');
    const [duration, setDuration] = React.useState(12); // months
    const apy = 0.05; // 5% APY

    const calculateEarnings = () => {
        return amount * Math.pow((1 + apy / 12), duration) - amount;
    };

    const earnings = calculateEarnings();
    const total = amount + earnings;

    return (
        <section id="invest" className="section-padding bg-bg-card border-y border-white/5 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute -right-32 top-0 w-96 h-96 bg-secondary blur-[100px] opacity-10 pointer-events-none"></div>

            <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <i data-lucide="trending-up" className="w-3 h-3"></i> High Yield
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Grow your wealth <br /> <span className="text-gradient">While you sleep.</span></h2>
                    <p className="text-dim mb-8 text-lg">
                        Earn industry-leading APY on your idle cash. No lock-in periods, no hidden fees. Just pure growth.
                    </p>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary"><i data-lucide="percent" className="w-4 h-4"></i></div>
                            <span className="text-lg">Up to <strong>5.00% APY</strong></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary"><i data-lucide="lock-open" className="w-4 h-4"></i></div>
                            <span className="text-lg">Withdraw anytime</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary"><i data-lucide="shield" className="w-4 h-4"></i></div>
                            <span className="text-lg">Insured up to $250k</span>
                        </li>
                    </ul>
                </div>

                <div className="card-glass p-8 rounded-2xl border border-white/10 shadow-2xl relative">
                    <h3 className="text-xl font-bold mb-6 text-center">Earnings Calculator</h3>

                    <div className="mb-6">
                        <label className="text-sm text-dim mb-2 block">Initial Deposit</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold">$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full bg-bg-dark border border-white/10 rounded-xl py-3 pl-8 pr-4 text-white focus:outline-none focus:border-primary transition-colors font-mono text-lg"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="text-sm text-dim mb-2 block">Duration: <span className="text-white font-bold">{duration} Months</span></label>
                        <input
                            type="range"
                            min="1"
                            max="60"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 text-center border border-white/5 mb-6">
                        <div className="text-sm text-dim mb-1">Projected Earnings</div>
                        <div className="text-3xl font-bold text-primary mb-1">+${earnings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                        <div className="text-xs text-dim">Total: ${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                    </div>

                    <button className="btn btn-primary w-full">Start Earning Now</button>
                    <div className="text-center mt-4 text-xs text-dim">
                        *Rates are subject to change.
                    </div>
                </div>
            </div>
        </section>
    );
};
window.Calculator = Calculator;
