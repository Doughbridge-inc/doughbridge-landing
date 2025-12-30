const LiveRatesTicker = () => {
    // Simulated initial rates
    const initialRates = [
        { pair: "BTC/USD", price: 64230.50, change: 2.4 },
        { pair: "ETH/USD", price: 3450.20, change: 1.8 },
        { pair: "SOL/USD", price: 145.80, change: -0.5 },
        { pair: "EUR/USD", price: 1.08, change: 0.1 },
        { pair: "GBP/USD", price: 1.25, change: -0.2 },
        { pair: "JPY/USD", price: 0.0065, change: 0.0 },
        { pair: "DOGE/USD", price: 0.16, change: 5.2 },
        { pair: "ADA/USD", price: 0.45, change: 1.1 },
    ];

    const [rates, setRates] = React.useState(initialRates);

    // Simulate live updates
    React.useEffect(() => {
        const interval = setInterval(() => {
            setRates(prevRates => prevRates.map(rate => ({
                ...rate,
                price: rate.price * (1 + (Math.random() * 0.002 - 0.001)), // +/- 0.1% change
                change: rate.change + (Math.random() * 0.2 - 0.1)
            })));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ticker-wrap w-full z-20 relative">
            <div className="bg-primary text-bg-dark font-bold px-6 py-0 h-full flex items-center z-10 shadow-lg">Live Market</div>
            <div className="ticker-track flex items-center">
                {[...rates, ...rates].map((rate, i) => ( // Duplicate for infinite scroll loop
                    <div className="flex items-center gap-2 px-6 border-r border-white/5 text-sm" key={i}>
                        <span className="font-bold text-white">{rate.pair}</span>
                        <span className="text-dim">
                            {rate.pair.includes("USD") && rate.price > 10 ? "$" : ""}
                            {rate.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                        </span>
                        <span className={`font-medium ${rate.change >= 0 ? "text-primary" : "text-red-500"}`}>
                            {rate.change >= 0 ? "+" : ""}{rate.change.toFixed(2)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
window.LiveRatesTicker = LiveRatesTicker;
