import React from "react";
import Schedule from "../Schedule";
import '../index.css';
import "react-multi-carousel/lib/styles.css";

function Artist() {

  return (
    <>
<div className="artist">
  <div id="artist-background" class="container-fluid jumbotron bg-cover text-white">
      <div id="text-contain" class="container text-center py-5">
        <h1 class="display-4 fw-bold">Jack Harlow</h1>
        <p class="font-weight-light mb-0">Rating *****</p>
    </div>
  </div> 

  <div class="sidebar py-4">
    <div class= "d-flex justify-content-center">
      <a href="https://open.spotify.com/artist/2LIk90788K0zvyj2JJVwkJ?si=ggKw9EM3QlePSkEkRB0o9g" class = "social-media-icon" target="_blank" rel="noopener noreferrer">
        <img src= "images/Spotify_icon.svg.png" alt="spotify" width="45" height="45"/>
      </a>
      
      <a href="https://www.stubhub.com/jack-harlow-tickets/category/100275160/" class = "social-media-icon" target="_blank" rel="noopener noreferrer">
        <img src= "images/ticket_icon.png" alt="stubhub" width="45" height="45"/>
      </a>

      <a href="https://www.jackharlow.us" class = "social-media-icon" target="_blank" rel="noopener noreferrer">
        <img src= "images/store_icon.png" alt="stubhub" width="45" height="45"/>
      </a>
    </div>
    <Schedule />
  </div>

  <div class="no-sidebar">
    <div class="container py-5">
      <h2 class="h3 font-weight-bold">Photo Gallery</h2>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card">
              <img src="https://www.rollingstone.com/wp-content/uploads/2022/05/jack-harlow-tour.jpg" class="d-block w-100" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title 1</h5>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="card">
              <img src="https://www.leoweekly.com/wp-content/uploads/2019/12/Harlow3.jpg" class="d-block w-100" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title 2</h5>
                </div>
            </div>
          </div>
          
          <div class="carousel-item">
            <div class="card">
              <img src="https://www.gannett-cdn.com/presto/2021/10/10/NA36/01000ac6-e203-4ed3-96ba-c5382420d8ac-DCQ_ACL21_SAT_010_1.JPG" class="d-block w-100" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title 3</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> 

    <div class="container py-5">
      <h2 class="h3 font-weight-bold">Reviews</h2>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">User A</h5>
            <small class="text-muted">9/6/2022</small>
          </div>
          <div class="d-flex w-100 justify-content-start">
            <p class="text-muted">Rating: * * * * * 5/5</p>
          </div> 
          <div class="d-flex w-100 justify-content-start">
            <p class="mb-1">I love Jack Harlow.</p>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">User B</h5>
            <small class="text-muted">9/5/2022</small>
          </div>
          <div class="d-flex w-100 justify-content-start">
            <p class="text-muted">Rating: * * * * * 5/5</p>
          </div>
          <div class="d-flex w-100 justify-content-start">
            <p class="mb-1">FIRST CLASS.</p>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">User C</h5>
            <small class="text-muted">9/5/2022</small>
          </div>
          <div class="d-flex w-100 justify-content-start">
            <p class="text-muted">Rating: * * * * * 5/5</p>
          </div>
          <div class="d-flex w-100 justify-content-start">
            <p class="mb-1">HE IS SO HOTTT.</p>
          </div>
        </a>
      </div>
    </div>
  </div>

</div>







</>


  );
}

export default Artist;