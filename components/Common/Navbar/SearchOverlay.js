import React from "react";

export default function SearchOverlay() {
  return (
    <>
      {/* <!-- Search Overlay --> */}
      <div class="search-overlay">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="search-layer"></div>
            <div class="search-layer"></div>
            <div class="search-layer"></div>

            <div class="search-close">
              <span class="search-close-line"></span>
              <span class="search-close-line"></span>
            </div>

            <div class="search-form">
              <form>
                <input
                  type="text"
                  class="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i class="flaticon-loupe"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Search Overlay --> */}
    </>
  );
}
