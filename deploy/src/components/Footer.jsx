const Footer = () => {
    // Force icon re-render on mount
    React.useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, []);

    return (
        <footer style={{
            backgroundColor: '#050505',
            color: 'white',
            paddingTop: 'clamp(3rem, 8vw, 6rem)',
            paddingBottom: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'var(--font-body)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            letterSpacing: 'normal'
        }}>
            <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

                {/* Main Grid: 5 Columns (1 Brand + 4 Links) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem 1.5rem',
                    marginBottom: 'clamp(3rem, 8vw, 6rem)'
                }} className="footer-grid">
                    {/* Column 1: Brand & Mission */}
                    <div style={{ gridColumn: 'span 2', paddingRight: '1rem' }} className="footer-brand">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Doughbridge.</h3>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.8, fontWeight: 'normal', marginBottom: '2rem', maxWidth: '20rem' }}>
                            Powering the future of borderless finance. Reliable, compliant infrastructure for the modern economy.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s' }}><i data-lucide="twitter" style={{ width: '16px', height: '16px' }}></i></a>
                            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s' }}><i data-lucide="linkedin" style={{ width: '16px', height: '16px' }}></i></a>
                            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s' }}><i data-lucide="github" style={{ width: '16px', height: '16px' }}></i></a>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem' }}>Product</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Global Payments</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Corporate Cards</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Treasury Management</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Capital</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Use Cases */}
                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem' }}>Use Cases</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Startups</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Enterprise</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>SaaS Platforms</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Marketplaces</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem' }}>Resources</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Documentation</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>API Reference</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Guides</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Customer Stories</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Careers</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Press</a></li>
                            <li><a href="#" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Trust & Legal */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem'
                }} className="footer-bottom">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }} className="footer-legal">
                        <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>© 2025 Doughbridge Financial Inc.</p>
                        <div className="flex gap-6">
                            <a href="#" style={{ fontSize: '0.75rem', color: '#4b5563', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy</a>
                            <a href="#" style={{ fontSize: '0.75rem', color: '#4b5563', textDecoration: 'none', transition: 'color 0.3s' }}>Terms</a>
                            <a href="#" style={{ fontSize: '0.75rem', color: '#4b5563', textDecoration: 'none', transition: 'color 0.3s' }}>Licenses</a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-6" style={{ opacity: 0.7 }}>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                            <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.1em', color: '#6b7280' }}>System Operational</span>
                        </div>
                        <div className="flex items-center gap-2" title="ISO 27001 Certified">
                            <i data-lucide="shield-check" style={{ width: '12px', height: '12px', color: '#6b7280' }}></i>
                            <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.1em', color: '#6b7280' }}>ISO 27001</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1.5fr repeat(4, 1fr) !important;
                    }
                    .footer-brand {
                        grid-column: span 1 !important;
                    }
                    .footer-bottom {
                        flex-direction: row !important;
                    }
                    .footer-legal {
                        flex-direction: row !important;
                        gap: 1.5rem !important;
                    }
                }
            `}</style>
        </footer>
    );
};
window.Footer = Footer;
