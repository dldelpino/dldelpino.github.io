import projects from "../projects.json"
import {Link} from "react-router-dom"

const Project = () => {
  return (
    <>
        {projects.map((project) => (
            <div className="project">
                <Link to={`/projects/${project.id}`}><img src={`/images/projects/${project.id}.png`}/></Link>
                <div>
                    <Link className="project-title" to={`/projects/${project.id}`}>{project.title}</Link>
                    <div>{project.description}</div>
                </div>
            </div>
          )
        )}
    </>
  )
}

export default Project