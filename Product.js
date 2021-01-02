import React from 'react';
import './Product.css'

const Product = () =>{
	return (
		<div>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
			  <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing.">
			  <div class="pa2 ph3-ns pb3-ns">
			    <div class="dt w-100 mt1">
			      <div class="dtc">
			        <h1 class="f5 f4-ns mv0">Cat</h1>
			      </div>
			      <div class="dtc tr">
			        <h2 class="f5 mv0">$1,000</h2>
			      </div>
			    </div>
			    <p class="f6 lh-copy measure mt2 mid-gray">
			      If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
			      and touch water with paw then recoil in horror.
			    </p>
		  		</div>
			</article>
		</div>
		)
}