function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Hero />
                <LiveRatesTicker />
                <FeaturesGrid />
                <VirtualCardSection />
                <Calculator />
            </main>
            <Footer />
        </div>
    );
}

// Make available for index.html
// Make available for index.html (optional, but good for debugging)
window.App = App;

// Mount the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
