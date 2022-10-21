import NavBar from '../src/components/NavBar';
import About from '../src/components/About';


export default function Home() {
    return (
        <div>
            <NavBar currentSection="Home"/>
            <About/>
        </div>
    )
}
