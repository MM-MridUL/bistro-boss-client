import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled,setDisabled]=useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }

    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)){
                setDisabled(false);
        }
        else{
                setDisabled(true);
        }

    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
                    <span className="label-text">Email</span>
                </label>
                <input type="password" name="password" placeholder="email" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot Password</a>
                </label>

            </div>
            {/* Captcha */}
            <div className="form-control">
                <label className="label">
                    <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
               

            </div>
            {/* Button */}

            <div className="form-control mt-6">

                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
