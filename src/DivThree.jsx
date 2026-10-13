export default function DivThree(){
    return(
        <div className="divThree">
          <div className="d-flex justify-content-between align-align-items-center">
            <div>
              <h5 className="btn btn-outline-secondary rounded-5">1</h5>
            </div>
            <div>
              <p>step 1</p>
              <h4>Your info</h4>
            </div>
          </div><div className="d-flex justify-content-between align-align-items-center mt-5">
            <div>
              <h5 className="btn btn-outline-secondary rounded-5  ">2</h5>
            </div>
            <div className="px-1">
              <p>step 2</p>
              <h4>Select plan</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between align-align-items-center mt-5">
            <div>
              <h5 className="btn btn-outline-secondary rounded-5  ">3</h5>
            </div>
            <div>
              <p>step 3</p>
              <h4>Add-ons</h4>
            </div>
          </div><div className="d-flex justify-content-between align-align-items-center mt-5">
            <div>
              <h5 className="btn btn-outline-secondary rounded-5  ">4</h5>
            </div>
            <div>
              <p>step 4</p>
              <h4>Summary</h4>
            </div>
          </div>
        </div>
    )
}