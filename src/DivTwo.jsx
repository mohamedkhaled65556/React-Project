export default function DivTwo(){
    return(
        <div className="divTwo bg-white">
          <h1 className="bg-white">Personal info</h1>
          <p>Please provide your name, email address, phone number.</p>
          <label htmlFor="#name">Name</label>
          <br />
          <input type="text" className="form-control" id="name"
            placeholder="Enter your name" />
          <label htmlFor="#email" className="mt-4">Email Address</label>
          <br />
          <input type="email" className="form-control" id="email"
            placeholder="Enter your email address" />
          <label htmlFor="#phone" className="mt-4">Phone Number</label>
          <br />
          <input type="number" className="form-control" id="phone"
            placeholder="Enter your phone number" />
          <br />
          <button className="btn btn-primary col-3">Next Step</button>
        </div>
    )
}