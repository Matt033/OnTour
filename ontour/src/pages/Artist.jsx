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
          </div>
    </div>
  );
}

export default Artist;