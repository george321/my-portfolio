import NavBar from '../components/NavBar';
import ContactComponent from '../components/contactComponent';

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Contact'}/>
            <ContactComponent/>
        </div>
    )
}