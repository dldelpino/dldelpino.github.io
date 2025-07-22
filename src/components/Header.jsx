import github from "../../public/images/github.png"
import linkedin from "../../public/images/linkedin.png"

const Header = () => {
  return (
    <>
    <header>
        <div className="header-left">
            <div><b>David López del Pino</b></div>
            <div>Recent Maths graduate at the University of Málaga</div>
            <div><a href="mailto:lopezdelpinodavid@gmail.com" target="_blank">lopezdelpinodavid@gmail.com</a></div>
        </div>
        <div className="header-right">
            <span><a href="https://github.com/dldelpino" target="_blank">
            <img src={github}/></a></span>
            <span><a href="https://www.linkedin.com/in/david-lopez-del-pino/" target="_blank"><img src={linkedin}/></a></span>
        </div>
    </header>
    </>
  )
}

export default Header