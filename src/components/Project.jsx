import projects from "../projects.json"
import {Link} from "react-router-dom"

const Project = () => {
  return (
    <>
        {projects.map((project) => (
            <div className="project">
                <Link to={`https://github.com/dldelpino/${project.projectTitle}`} target="_blank"><img src={`/images/projects/${project.projectTitle}.png`}/></Link>
                <div>
                    <Link className="project-title" to={`https://github.com/dldelpino/${project.projectTitle}`} target="_blank">{project.title}</Link>
                    <div>{project.description}</div>
                </div>
            </div>
          )
        )}
    </>
  )
}

export default Project