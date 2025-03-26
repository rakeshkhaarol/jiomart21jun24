import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{ height: '100%', position: 'relative' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', top: '250px', position: 'absolute', fontSize: 100, left: '750px' }}>
                <i class="bi bi-exclamation-circle-fill "></i>
            </span>
            <span style={{ top: '320px', position: 'absolute', fontSize: 50, left: '610px', fontWeight: 'bold' }}>Page Not Found</span>

            <p style={{ top: '400px', position: 'absolute',  left: '500px', fontSize:'24px', fontWeight:'initial'  }}>Oops! We couldn't find the page that you're looking for. </p>
            <p style={{ top: '440px', position: 'absolute',  left: '600px', fontSize:'24px', }}>Please check the address and try again </p>
            <span style={{ top: '540px', position: 'absolute',  left: '740px', fontWeight: 'bold' }}>Error Code: 404</span>
            <Link to={'/'}>
            <button style={{ top: '600px', position: 'absolute',  left: '705px', fontWeight: 'bold' }}  type="button" class="btn btn-info">Go To The Home Page</button>
            </Link>

        </div>
    )
}

export default NotFound