import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        {/* We can modify path name or something like */}
            {/* <Link to={{
                pathname:"/about",
                search:"?name+link5",
                hash:"#lkdjsflk"
            }}>
                <FaQuestion size={30} />
            </Link> */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink