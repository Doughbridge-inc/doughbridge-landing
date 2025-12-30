const AnimatedLogo = () => {
    return (
        <div className="flex items-center justify-center relative w-10 h-10">
            <style>
                {`
                @keyframes draw {
                    0% { stroke-dashoffset: 100; opacity: 0; }
                    20% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 1; }
                }
                @keyframes electric-pulse {
                    0%, 100% { stroke: #ffffff; filter: drop-shadow(0 0 2px rgba(255,255,255,0.5)); }
                    50% { stroke: #ccff00; filter: drop-shadow(0 0 8px rgba(204, 255, 0, 0.8)); }
                }
                .logo-path {
                    fill: none;
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: draw 2s ease-out forwards, electric-pulse 4s infinite 2s;
                }
                `}
            </style>
            <svg viewBox="0 0 40 40" width="100%" height="100%" className="overflow-visible">
                {/* Abstract Bridge Shape */}
                <path d="M5,30 L5,15 L10,15 L10,30 M30,30 L30,15 L35,15 L35,30 M5,20 Q20,5 35,20" className="logo-path" stroke="white" />

                {/* Connection Nodes */}
                <circle cx="20" cy="12.5" r="1.5" fill="#ccff00" className="animate-pulse" />
            </svg>
        </div>
    );
};
window.AnimatedLogo = AnimatedLogo;
