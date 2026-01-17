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
        <section id="invest" className="section-padding bg-bg-card relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Background Element */}
            <div style={{
                position: 'absolute',
                right: '-8rem',
                top: 0,
                width: '24rem',
                height: '24rem',
                backgroundColor: 'var(--secondary)',
                filter: 'blur(100px)',
                opacity: 0.1,
                pointerEvents: 'none'
            }}></div>

            <div className="container grid md:grid-cols-2 items-center relative" style={{ gap: 'clamp(2rem, 5vw, 4rem)', zIndex: 10 }}>
                <div>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(0,255,148,0.2)',
                        backgroundColor: 'rgba(0,255,148,0.05)',
                        color: 'var(--primary)',
                        fontSize: 'clamp(0.625rem, 2.5vw, 0.75rem)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        <i data-lucide="trending-up" style={{ width: '12px', height: '12px' }}></i> High Yield
                    </div>
                    <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: 1.1 }}>
                        Grow your wealth <br /> <span className="text-gradient">While you sleep.</span>
                    </h2>
                    <p className="text-dim mb-8" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)', marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                        Earn industry-leading APY on your idle cash. No lock-in periods, no hidden fees. Just pure growth.
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                        <li className="flex items-center gap-3">
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                flexShrink: 0
                            }}>
                                <i data-lucide="percent" style={{ width: '16px', height: '16px' }}></i>
                            </div>
                            <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>Up to <strong>5.00% APY</strong></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                flexShrink: 0
                            }}>
                                <i data-lucide="lock-open" style={{ width: '16px', height: '16px' }}></i>
                            </div>
                            <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>Withdraw anytime</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                flexShrink: 0
                            }}>
                                <i data-lucide="shield" style={{ width: '16px', height: '16px' }}></i>
                            </div>
                            <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>Insured up to $250k</span>
                        </li>
                    </ul>
                </div>

                <div className="card-glass" style={{
                    padding: 'clamp(1.25rem, 4vw, 2rem)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                    position: 'relative'
                }}>
                    <h3 className="font-bold mb-6 text-center" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>Earnings Calculator</h3>

                    <div style={{ marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
                        <label className="text-dim" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>Initial Deposit</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'white', fontWeight: 'bold' }}>$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'var(--bg-dark)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    padding: '0.75rem 1rem 0.75rem 2rem',
                                    color: 'white',
                                    fontFamily: 'monospace',
                                    fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                        <label className="text-dim" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>
                            Duration: <span style={{ color: 'white', fontWeight: 'bold' }}>{duration} Months</span>
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="60"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            style={{
                                width: '100%',
                                height: '8px',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                appearance: 'none',
                                cursor: 'pointer',
                                accentColor: 'var(--primary)'
                            }}
                        />
                    </div>

                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        textAlign: 'center',
                        border: '1px solid rgba(255,255,255,0.05)',
                        marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
                    }}>
                        <div className="text-dim" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Projected Earnings</div>
                        <div className="text-primary font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', marginBottom: '0.25rem' }}>
                            +${earnings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                        <div className="text-dim" style={{ fontSize: '0.75rem' }}>
                            Total: ${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                    </div>

                    <button className="btn btn-primary w-full">Start Earning Now</button>
                    <div className="text-center text-dim" style={{ marginTop: '1rem', fontSize: '0.75rem' }}>
                        *Rates are subject to change.
                    </div>
                </div>
            </div>
        </section>
    );
};
window.Calculator = Calculator;
