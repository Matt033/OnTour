import React from "react";
import '../index.css';
function Artist() {
  return (
    <div className="artist">
          <div id="artist-background" class="jumbotron bg-cover text-white">
            <div class="container py-5 text-center">
              <h1 class="display-4 font-weight-bold">The Weeknd</h1>
              <p class="font-weight-light mb-0">Rating *****</p>
            </div>
          </div> 

          <div class="container py-5">
            <h2 class="h3 font-weight-bold">Photo Gallery</h2>
          </div>

          <div class="container py-5">
            <h2 class="h3 font-weight-bold">Upcoming Shows</h2>
            <div class="d-flex justify-content-center">
            <ul class="list-group list-width">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-1">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 16
                    </h6>
                  </button>
                  </div>
                  <div class="col-3">
                    <div class="px-5 font-weight-bold">
                      City, State
                    </div>
                  </div>
                  <div class="col-8">
                    hi
                  </div>
                </div>
              </li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            </div> 
          </div>

          <div class="container py-5">
            <h2 class="h3 font-weight-bold">Past Shows</h2>
            <div class="d-flex justify-content-center">
            <ul class="list-group list-width">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-1">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 16
                    </h6>
                  </button>
                  </div>
                  <div class="col-3">
                    <div class="px-5 font-weight-bold">
                      City, State
                    </div>
                  </div>
                  <div class="col-8">
                    hi
                  </div>
                </div>
              </li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            </div> 
          </div>
    </div>
  );
}

export default Artist;