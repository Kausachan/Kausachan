import React from 'react';
import Card from './Card.js'

const CardList = ({robos})=>{
	if(true){
		throw new Error('Ooops smething went wrong!');
	}
	return(
		robos.map( (user,i) =>{
			return (
				<Card 
					key={i} 
					id={robos[i].id} 
					name={robos[i].name} 
					age={robos[i].age} 
					number={robos[i].number}
				/>
		)
	})		
)}

export default CardList;