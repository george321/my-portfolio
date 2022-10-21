import NavBar from '../src/components/NavBar';
import ContactComponent from '../src/components/contactComponent';

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Contact'}/>
            <ContactComponent/>
        </div>
    )
}