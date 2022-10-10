import React from "react";

export default function Custom404() {
  return (
    <>
      {/* <!-- Start 404 Error --> */}
      <div class="error-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="error-content">
              <img src="img/404-error.jpg" alt="Image" />
              <h3>Oops! Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <a href="/" class="default-btn-two">
                Return To Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End 404 Error --> */}
    </>
  );
}
