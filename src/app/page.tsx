import About from './about/page';
import Blog from './blog/page';
import Hero from './hero/page';
import Services from './services/page';
import Projects from './projects/page';
import Skills from './components/skills';
import Experience from './components/experience';


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Blog />
        </div>
    );
};

export default Home;
