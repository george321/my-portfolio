import NavBar from '../components/navBar';
import ContactComponent from '../components/contactComponent';

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Contact'}/>
            <ContactComponent/>
        </div>
    )
}