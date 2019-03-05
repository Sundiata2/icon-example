import React from 'react';

const DuoCamera = (props) => (
  <svg height={props.height} width={props.width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	  <title>camera 20 2</title>
    <g fill="#f11212" stroke="#f11212" strokeLinecap="square" strokeWidth="2">
      <line fill="none" x1="7" x2="15" y1="8" y2="8"/>
      <path d="M6,58h52 c2.209,0,4-1.791,4-4V18c0-2.209-1.791-4-4-4h-9l-7-8H28l-7,8H6c-2.209,0-4,1.791-4,4v36C2,56.209,3.791,58,6,58z" fill="none" stroke="#000000"/>
      <circle cx="35" cy="36" fill="none" r="14"/>
      <circle cx="13" cy="24" fill="none" r="1" stroke="#000000"/>
      <circle cx="13" cy="24" fill="#000000" r="1" stroke="none" strokeLinecap="square"/>
    </g>
  </svg>
);

export default DuoCamera;
