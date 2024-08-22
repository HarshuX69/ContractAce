import React from 'react'

const Loader = ({ show }) => {

      return (
        <div className="modal" id="loaderModal" tabIndex="-1" aria-labelledby="loaderModalLabel" aria-hidden="true" style={{display:show?'block':'none'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div class="loader"><span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                </div>
                <div className="mt-3">Loading, please wait...</div>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default Loader
