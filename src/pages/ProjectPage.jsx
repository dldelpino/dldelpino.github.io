import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import projects from "../projects.json"
import ReactMarkdown from "react-markdown"
import {useEffect, useState} from "react"

// AHORA MISMO NO LO USO

const ProjectPage = () => {
  const {id} = useParams() // como la url es /projects/:id, useParams() va a devolver id
  const project = projects.find((p) => String(p.id) == id) // encontrar el proyecto con el id de la url
  const [readme, setReadme] = useState("") // variable de estado con estado inicial ""
  // readme es la variable que almacenará el contenido de README.md, y setReadme es la función que actualizará la variable readme

  useEffect(() => {
    const repo = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, ''); // Título del proyecto -> titulo-del-proyecto
    const url = `https://raw.githubusercontent.com/dldelpino/${repo}/main/README.md`;
    fetch(url) // hace una petición a la url y devuelve un objecto res (respuesta)
      .then(res => res.ok ? res.text() : "") // si la respuesta es existosa (res.ok == true), se llama a res.text() para obtener el contenido de res en forma de texto
      .then(text => setReadme(text)) // guarda el texto en setReadme
  }, [project])
  // primer argumento: función
  // segundo argumento: array de dependencias (variables que se usan en la función)

  // sin useEffect, el código se ejecuta cada vez que se renderiza el componente, lo que puede causar problemas
  // al usar useEffect, el código se ejecuta solo cuando cambian las dependencias

  return (
    <>
        <h2 className="section-title"><Link to="/">↩</Link> {project.title}</h2>
        <hr/>
        {readme && <ReactMarkdown>{readme}</ReactMarkdown>}
    </>
  )
}

export default ProjectPage