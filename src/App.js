import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='navbarr'>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler  burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center resp" id="navbarNav">
      <ul class="navbar-nav  navul">
        <li class="nav-item" id='cum'>Commumity</li>
        <li class="nav-item">PortFolio</li>
        <li class="nav-item"> Inspiration</li>
        <li class="nav-item">News</li>
        <li class="nav-item">Features</li>
        <li class="nav-item">Jobs</li>

      </ul>
    </div>
  </div>
</nav>
        {/* <ul>
        <li>Commumity</li>
        <li>Port Folios</li>
        <li>Inspiration</li>
        <li>News</li>
        <li>Features</li>
        <li>Jobs</li>
       </ul>  */}
        

<div class="row row-cols-2 row-cols-md-3 g-4  card-man">
  <div class="col cardsss">
    <div class="card h-100 bord">
      <div class="card-body  cardcolor">
        <h3 class="card-title">Services</h3>
      <img src={require('./images/services.jpg')} class="card-img-top  wit"/>
        <h5 className='sec1h5'>Suspendisse SoliciDittin</h5>
        <small>Dues vitae temper pamper</small>
        <div className='lino'> </div>
        <small className='disp'>Sudais Faramentation</small>
        <small className='disp'>Quantom marl</small>
        <small className='disp'>tata byby</small>

        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>

  <div class="col cardsss">
    <div class="card h-100  bord">
      <div class="card-body  cardcolor">
        <h3 class="card-title">Shared Files</h3>
      <img src={require('./images/files.png')} class="card-img-top  wit2" alt="..." />
      <h5 className='sech5'>Temper sampaga</h5>
      <small>Dues vitae temper pamper</small>
      <div className='lino'> </div>
      <small className='disp'>Sudais Faramentation</small>
        <small className='disp'>Quantom marl</small>
        <small className='disp'>tata byby</small>

        {/* <p class="card-text">This is a short card.</p> */}
      </div>
    </div>
  </div>

  <div class="col cardsss">
    <div class="card h-100  bord">
      <div class="card-body  cardcolor">
        <h3 class="card-title">Manage list and Subscribers</h3>
    <img src={require('./images/list.png')} class="card-img-top  wit" alt="..."/>
    <h5 className='sec1h5'>Aqauruim Massa</h5>
      <small>haga di putaay ki</small>
      <div className='lino'> </div>
      <small className='disp'>Sudais Faramentation</small>
        <small className='disp'>Quantom marl</small>
        <small className='disp'>tata byby</small>

        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col cardsss">
    <div class="card h-100  bord">
      <div class="card-body  cardcolor">
        <h3 class="card-title">Videos and photos</h3>
    <img src={require('./images/video.png')} class="card-img-top  wit4" alt="..."/>
    <h5 className='sec4h5'>Magna Sagnamerma</h5>
      <small>Inter ki degas ta polayar</small>
      <div className='lino'> </div>
      <small className='disp'>Sudais Faramentation</small>
        <small className='disp'>Quantom marl</small>
        <small className='disp'>tata byby</small>

        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
</div>


    </div>

    <div className='heig'></div>
    </>
      
  );
}

function Afternav(){
  return(
    <>
  <div class="card-group  card-man2">
  <div class="card  fle  cardss  bord">
    <div class="card-body">
      <h5 class="card-title">Committed to our <span className='high'>Clients</span></h5>
      <img src={require('./images/handshake.png')} class="card-img-top  witx" alt="..."/>
      <p class="card-text txtp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero ad officiis facilis voluptatibus? Quae excepturi modi cumque incidunt unde laboriosam. Similique molestiae voluptatibus neque dolor reiciendis quae asperiores, mollitia commodi</p>
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>

  <div class="card  cardss  bord">
    <div class="card-body">
      <h5 class="card-title"><span className='high'>Solutions</span> for the bottom line </h5>
      <img src={require('./images/bulb3.png')} class="card-img-top  witx2" alt="..."/>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero ad officiis facilis voluptatibus? Quae excepturi modi cumque incidunt unde laboriosam. Similique molestiae voluptatibus neque dolor reiciendis quae asperiores, mollitia commodi  </p>
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>

  <div class="card  graph-car">
    <div class="card-body">
  <img src={require('./images/maine.png')} class="card-img-top  graph" alt="..."/>
    </div>
  </div>
</div>


<footer>
        <div className='foot-man'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 footer-flex  '>
                {/* <img src={require('')}  className='grpgh-img text-center foot-img' /> */}
                <div className='conti handle'>
                  <h1><span className='high'>SUBSCRIBE </span> </h1>
                  <h3>GETNEWSLETTERS</h3>
                  {/* <input type='text'/> */}
                </div>
              </div>
              <div className='col-lg-4 footer-flex '>
                {/* <img src={require('')}  className='grpgh-img text-center foot-img' /> */}
                <div className='conti handle'>
                  <h1><span className='high'> FOLLOW US </span></h1>
                  <h3>ON SOCIAL NETWORKS</h3>

                </div>


              </div>
              <div className='col-lg-4 footer-flex '>
                {/* <img src={require('')} width="20%" className='grpgh-img text-center foot-img' /> */}
                <div className='conti handle'>
                  <h1><span className='high'>EMAIL</span> </h1>
                  <h3>CONTACT US</h3>

                </div>



              </div>
            </div>
            <div className='row displ'>
              <div className='col-lg-4 '>
                <div className='cont footer-flex'>
                  
                  <input type='text'/>
                  <p>subscribe</p>
                </div>
              </div>
              <div className='col-lg-4 footer-flex'>
                <div className='conti'>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>


              </div>
              <div className='col-lg-4 footer-flex'>
              <div className='conti'>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>



              </div>
            </div>
          </div>

        </div>
      </footer>

 </>
  );
 

}
export {App , Afternav} 


