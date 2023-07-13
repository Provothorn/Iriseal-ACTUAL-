
import React from 'react';
export default Homepage;


function Homepage(){
    return(
        <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><b>IrisSeal</b></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
    </div>
  </nav>

  <div class="homediv">
           <h1 class ="firsth1" >User E-mail IDs</h1>

  </div>

  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse sidebar-dark bg-dark">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        <br/>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
              <br/>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>

        </a>
        <br/>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-globe fa-fw me-3"></i><span>International</span></a>

<br/>
       
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
      
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
      </div>
    </div>
  </nav>

  </div>
  
      
    )
  }
