import NavBar from '../src/components/NavBar';
import SkillsComponent from '../src/components/skillsComponent';

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Skills'} />
            <SkillsComponent/>
        </div>
    )
}