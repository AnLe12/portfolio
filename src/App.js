import Header from '~/components/Header';
import './App.scss';
import Content from '~/components/Content';
import Tech from '~/components/Tech';
import Projects from '~/components/Projects';
import GetInTouch from '~/components/GetInTouch';
import Footer from '~/components/Footer';
import Button from '~/components/Button';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Content />
                <Tech />
                <Projects />
                <GetInTouch />
            </main>
            <Footer />
            <Button />
        </div>
    );
}

export default App;
