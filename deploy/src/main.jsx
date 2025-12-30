const App = React.lazy(() => import('./App.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Suspense fallback={<div className="container" style={{ padding: '50px' }}>Loading Doughbridge...</div>}>
        <App />
    </React.Suspense>
);
