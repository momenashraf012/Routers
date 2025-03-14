
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul style={{ width:"50%",margin:"auto",padding:"30px",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"red" }}>
                <li><NavLink to ="/">home</NavLink></li>
                <li><NavLink to ="/contact">contact</NavLink></li>
                <li><NavLink to ="/about">about as</NavLink></li>
                <li><NavLink to ="/Learn">Learn</NavLink></li>

            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar

