
import { NavLink } from 'react-router-dom'

const LearnAside = () => {
  return (
    <aside>
         <nav>
            <ul style={{ width:"50%",margin:"auto",padding:"30px",display:"flex",justifyContent:"space-between",alignItems:"center" ,backgroundColor:"red", marginTop:"20px" }}>
                <li><NavLink to ="/Learn" end>Quick Start</NavLink></li>
                <li><NavLink to ="/Learn/Tutorial">Tutorial</NavLink></li>
                <li><NavLink to ="/Learn/Installation">Installation</NavLink></li>

            </ul>
        </nav>
    </aside>
   
  )
}

export default LearnAside