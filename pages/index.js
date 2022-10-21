import About from '../src/components/About';
import NavBar from '../src/components/NavBar';


export default function Home() {
    return (
        <div>
            <NavBar currentSection="Home"/>
            <About/>
        </div>
    )
}
