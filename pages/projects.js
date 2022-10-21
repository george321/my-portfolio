import NavBar from '../src/components/NavBar';
import ProjectsComponent from '../src/components/projectsComponent';

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Projects'}/>
            <ProjectsComponent/>
        </div>
    )
}