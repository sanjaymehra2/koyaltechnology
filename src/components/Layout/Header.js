import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import parent from './parent.jpg';
import './Header.module.css';

const Header = () => {
	return (
		<div>
			<div
				className="header row"
				style={{
					backgroundColor: 'white',
					width: '90%',
					margin: 'auto',
					height: '80px',
					border: '1px solid black',
					padding:'15px'
					
				}}
			>
				<h3>Cyzplamovir</h3>
			</div>
			<img src={parent} alt="img" style = {{width:'90%',height: '400px',marginLeft:'4rem',marginRight:'3rem'}} />
		</div>
	);
};
export default Header;
