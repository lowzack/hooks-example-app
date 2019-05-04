import React from 'react';
import './Card.scss'

export const Card: React.FC<React.HTMLAttributes<{}>> = ({children}) => (
  <div className="Card">
    {children}
  </div>
)