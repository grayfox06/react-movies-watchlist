import { useState } from 'react';

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    // If button is clicked open MovieList
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>

      {isOpen && children}
    </div>
  );
}
