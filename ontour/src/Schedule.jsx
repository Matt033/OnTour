import React from "react";

function Schedule() {
  return (
    <div class="container shows">
      <div class="row justify-content-center py-3 show">
        <h3 class="fw-bold">Upcoming Shows</h3>
      </div>

      <a href="/review">
        <div class="row justify-content-center py-3 show">
          <div class="col-4">
            <div class="fw-bold schedule-font">
              Oct 2
            </div>
            <div class="schedule-subfont">
              Sun • 1:00pm
            </div>
          </div>
          <div class="col-7 show-location">
            <div class="fw-bold schedule-font">
              Primavera Sound LA 
            </div>
            <div class="schedule-subfont">
              Los Angeles, California
            </div>
          </div>
          <div class="col-1 align-self-center">
            <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
          </div>
        </div>
      </a>

      <a href="/review">
        <div class="row justify-content-center py-3 show">
          <div class="col-4">
            <div class="fw-bold schedule-font">
              Oct 12
            </div>
            <div class="schedule-subfont">
              Wed • 8:00pm
            </div>
          </div>
          <div class="col-7 show-location">
            <div class="fw-bold schedule-font">
              Super Legends Cruise 
            </div>
            <div class="schedule-subfont">
              Los Angeles, California
            </div>
          </div>
          <div class="col-1 align-self-center">
            <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
          </div>
        </div>
      </a>

      <a href="/review">
        <div class="row justify-content-center py-3 show">
          <div class="col-4">
            <div class="fw-bold schedule-font">
              Oct 20
            </div>
            <div class="schedule-subfont">
              Thurs • 6:00pm
            </div>
          </div>
          <div class="col-7 show-location">
            <div class="fw-bold schedule-font">
              Super Legends Cruise 
            </div>
            <div class="schedule-subfont">
              Los Angeles, California
            </div>
          </div>
          <div class="col-1 align-self-center">
            <img src="https://assets.sk-static.com/images/nw/furniture/icons/chevron-black.svg"></img>
          </div>
        </div>
      </a>

      <div class="row justify-content-center py-3">
        <button id="upcoming-btn">See more</button>
      </div>
    </div>
  );
}

export default Schedule;