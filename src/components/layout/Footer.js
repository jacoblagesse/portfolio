import React from 'react';

export default function Footer({ location }) {
  return (
    <div className='footer'>
      <p>Copyright © Jacob LaGesse, 2020 <span>[ </span>jacoblagesse@gmail.com<span> ]</span></p>
      <p>Created with React <span><i class="fab fa-react"></i></span><a href='https://github.com/jacoblagesse/portfolio' target='_blank' rel='noopener noreferrer'> See inside</a></p>
    </div>
  )
}