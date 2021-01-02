import React from 'react';

const Card=({name,number,id,age})=>{
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt='friend' src={`https://robohash.org/${id}size=200x200`}/>
			<div>
				<h2>Name: {name}</h2>
				<p>Number: {number}</p>
				<p>Age: {age}</p>
			</div>
		</div>
	);
}

export default Card;