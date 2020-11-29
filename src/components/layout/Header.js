import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Resume from '../../assets/LaGesseResume.pdf';

export default function Header({ location }) {
  return (
    <div className='header'>
      <HashLink className='link' smooth to='#'>Home</HashLink>
      <HashLink className='link' smooth to='#portfolio'>Portfolio</HashLink>
      <HashLink className='link' smooth to='#about'>About</HashLink>
      <a className='link' href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
    </div>
  )
}