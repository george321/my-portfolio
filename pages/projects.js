import NavBar from "../components/navBar";
import ProjectsComponent from "../components/projectsComponent";

export default function Projects() {
    return (
        <div>
            <NavBar currentSection={'Projects'} />
            <ProjectsComponent/>
        </div>
    )
}