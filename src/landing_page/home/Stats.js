import React from 'react'
import './css/stats.css'

function Stats() {
    return ( 
        <div className ='container'>
        <div className= 'row my-5'>
          <div className='col-6 my-5'>
             <h2 className ='pb-3 '> Trust with confidence</h2>
             <div className='content-left'>

             <h3>Customer-first always</h3>
             <p className='text-muted'>That's why 1.3+ crore customers trust Tradezen with <i class="fa-solid fa-indian-rupee-sign"></i>
             3.5+ lakh crore worth of equity investments.</p>

             <h3>NO spam or gimmicks</h3>
             <p className='text-muted'>No gimmicks spam, "gamification", or annoying push notifications
                High quality apps that you use at your pace, the way you like.
             </p>


             <h3>The Tradezen universe</h3>
             <p className='text-muted'> Not just an app, but the whole ecosystem. Our investments in 30+ fintech startups offer
                you tailord services specific to your needs.
             </p>

             <h3>Do better with money</h3>
             <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just help you invest,
                 but also guide you to make smarter financial decisions.</p> 
             </div>
             

          </div>
          <div className='col-6 content-right my-5'>
                <img src ='media/images/ecosystem.png'></img>
                <div className='text'>
                    <a href =''>Explore our products<i class="fa-solid fa-arrow-right"></i></a> &nbsp;
                    <a href =''>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                </div>
            </div>
            </div>
            
     );
}

export default Stats;