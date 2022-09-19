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

          <div class="container py-5 shows">
            <div class="row justify-content-center py-3 show">
              <h2 class="h3 font-weight-bold">Upcoming Shows</h2>
            </div>

            <a href="/review">
              <div class="row justify-content-center py-3 show">
                <div class="col-2">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 23
                    </h6>
                  </button>
                </div>
                <div class="col-8 show-location">
                  <div class="font-weight-bold">
                    Primavera Sound LA 2022
                  </div>
                  <div>
                    Los Angeles, California
                  </div>
                </div>
                <div class="col-2 align-self-center">
                  <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
                </div>
              </div>
            </a>

            <a href="/review">
              <div class="row justify-content-center py-3 show">
                <div class="col-2">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 27
                    </h6>
                  </button>
                </div>
                <div class="col-8 show-location">
                  <div class="font-weight-bold">
                    Super Legends Cruise 2022
                  </div>
                  <div>
                    Long Beach, California
                  </div>
                </div>
                <div class="col-2 align-self-center">
                  <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
                </div>
              </div>
            </a>

            <a href="/review">
              <div class="row justify-content-center py-3 show">
                <div class="col-2">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Oct 23
                    </h6>
                  </button>
                </div>
                <div class="col-8 show-location">
                  <div class="font-weight-bold">
                    Super Legends Cruise 2023
                  </div>
                  <div>
                    Long Beach, California
                  </div>
                </div>
                <div class="col-2 align-self-center">
                  <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
                </div>
              </div>
            </a>

            <div class="row justify-content-center py-3">
              <button id="upcoming-btn">See more</button>
            </div>
          </div>

          <div class="container py-5 shows">
            <div class="row justify-content-center py-3 show">
              <h2 class="h3 font-weight-bold">Past Shows</h2>
            </div>

            <a href="/review">
              <div class="row justify-content-center py-3 show">
                <div class="col-2">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 7
                    </h6>
                  </button>
                </div>
                <div class="col-8 show-location">
                  <div class="font-weight-bold">
                    Primavera Sound LA 2020
                  </div>
                  <div>
                    Los Angeles, California
                  </div>
                </div>
                <div class="col-2 align-self-center">
                  <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
                </div>
              </div>
            </a>

            <a href="/review">
              <div class="row justify-content-center py-3 show">
                <div class="col-2">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 15
                    </h6>
                  </button>
                </div>
                <div class="col-8 show-location">
                  <div class="font-weight-bold">
                    Super Legends Cruise 2020
                  </div>
                  <div>
                    Long Beach, California
                  </div>
                </div>
                <div class="col-2 align-self-center">
                  <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
                </div>
              </div>
            </a>

            <a href="/review">
              <div class="row justify-content-center py-3 show">
                <div class="col-2">
                  <button type="button" class="date-btn btn btn-secondary">
                    <h6>
                      Sep 15
                    </h6>
                  </button>
                </div>
                <div class="col-8 show-location">
                  <div class="font-weight-bold">
                    Super Legends Cruise 2021
                  </div>
                  <div>
                    Long Beach, California
                  </div>
                </div>
                <div class="col-2 align-self-center">
                  <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
                </div>
              </div>
            </a>

            <div class="row justify-content-center py-3">
              <button id="past-btn">See more</button>
            </div>
          </div>
          
    </div>
  );
}

export default Artist;