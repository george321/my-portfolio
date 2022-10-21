import ContactComponent from '../src/components/contactComponent';
import NavBar from '../src/components/NavBar';

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Contact'}/>
            <ContactComponent/>
        </div>
    )
}