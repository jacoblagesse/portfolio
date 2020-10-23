import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Header({ location }) {
  return (
    <div className='header'>
      <HashLink className='link' smooth to='#'>Home</HashLink>
      <HashLink className='link' smooth to='#portfolio'>Portfolio</HashLink>
      <HashLink className='link' smooth to='#about'>About</HashLink>
    </div>
  )
}