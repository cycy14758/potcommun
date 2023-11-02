import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
 
 function Home() {
   return (
     <div  className='Home'   >
<div class="seo-page-form-input">
<input type="text" name="nom-pot" data-ng-model="nomPot" placeholder="Donner un nom à votre cagnotte :" class="ng-pristine ng-untouched ng-valid placeholder"></input>
<div class="seo-page-form-button">
    
<button className='bt' type="submit">Valider</button>
</div>
</div>
     </div>
   )
 }
 
 export default Home