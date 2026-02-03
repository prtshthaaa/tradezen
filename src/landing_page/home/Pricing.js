import React from 'react'
import './css/pricing.css'
function Pricing() {
    return ( 
        <div className ='container'>
            <div className ='row my-5 '>              
                <div className ='col-5'>

                    <h1>Unbeatable pricing</h1> 
                    <p>We pioneered the concept of discount broking price transparency in india.
                         flat fees and no hidden charges.</p>

                         <a href =''>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                    
                 </div>
                 <div className='col-2'></div>

                  <div className ='col-5'>

                    <div className ='row '>
                        <div className ='col-6 bracket p-4 text-center'>
                            <h1 ><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p className='pt-3'>free equity delivery and direct mutual funds</p>
                        </div>
                        
                        <div className ='col-6  bracket p-4 text-center'>
                            <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p className='pt-3'>Intraday and F&O</p>
                        </div>

                    </div>
                     </div>
            </div>
            <div className ='row my-5'>
                <div className ='col-6'> </div>
                 <div className ='col-6'> </div>
            </div>

        </div>
     );
}

export default Pricing;