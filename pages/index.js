import NavBar from '../components/navBar';
import About from '../components/about';


export default function Home() {
    return (
        <div>
            <NavBar currentSection="Home"/>
            <About/>
        </div>
    )
}
