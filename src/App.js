import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
    return (
        <div>
            <div className="container px-8 mx-auto">
                <Header />
                <Hero />
                <Slider />
            </div>
        </div>
    );
}

export default App;
