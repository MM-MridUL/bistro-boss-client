import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
       
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              {/* Name */}
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="name" className="input input-bordered" />
  
              </div>
              {/* EMail */}
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" />
  
              </div>
              {/* Password */}
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" />
                  <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot Password</a>
                  </label>
  
              </div>
              {/* Captcha */}
              <div className="form-control">
                  <label className="label">
                      {/* <LoadCanvasTemplate /> */}
                  </label>
                  <input type="text"  name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                  <button  className='btn btn-outline btn-xs mt-2'>Validate</button>
                 
  
              </div>
              {/* Button */}
  
              <div className="form-control mt-6">
  
                  <input  className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p><small>New Here? <Link to="/signup">Create an account</Link></small></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;