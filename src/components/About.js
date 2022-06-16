import { Link } from 'react-router-dom';

function About( props ) {

  const { logoImg } = props;

  return (
    <div>
        <h4>Version 1.0.0</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
          anim id est laborum.
        </p>
        <div className='logo'>
          <img className='app-logo' src={logoImg} alt='React Logo...' />
          <p>React JS</p>
        </div>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About