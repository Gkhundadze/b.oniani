import './error.css'
import {NavLink} from 'react-router-dom'


function Error () {
    return (
        <div className='error-page df justify-center align-center fldir-col'>
            <h1 className='error-message'>გვერდი ვერ მოიძებნა</h1>
            <NavLink className='to-main color-white' to='/' > მთავარ გვერდზე დაბრუნება </NavLink>
        </div>
    )
}



export default Error;