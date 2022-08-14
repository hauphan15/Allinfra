
function Login() {
    return (
      <div className="flex h-screen">
        <div className="bg-white w-1/2 h-4/5">
            <div className="p-52 relative">
                <div className="absolute top-10">
                    <div className="font-bold">
                        Allinfra
                    </div>
                    <div className="font-bold text-slate-400 text-sm">
                        DIGITAL
                    </div>
                </div>
                <div className="font-bold text-xl">
                    Sign in to your account
                </div>
                <form>
                    <div className="mt-5">
                        <div className="text-xs font-medium text-slate-500">Email</div>
                        <input
                            className="rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400"
                            autocomplete="email" 
                            required 
                            placeholder="Email address" 
                         />
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <div className="text-xs font-medium text-slate-500">
                                Password
                            </div>
                            <div className="text-sm font-bold text-blue-500">
                                Forgot password?
                            </div>
                        </div>
                        <div className="flex relative">
                            <input
                                className="rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400"
                                autocomplete="password" 
                                required 
                                placeholder="Password" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-0 top-1/4 py-1 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </div>
                    <button className="text-center w-full bg-blue-600 rounded h-10 mt-5 font-medium text-white">Sign In</button>
                </form>
            </div>
        </div>
        <div className="bg-blue-700 w-1/2 h-full">
            <div className="p-52">
                <div className="font-bold text-2xl text-white">
                    Allinfra Digital Management Platform
                </div>
                <div className="font-normal text-green-200 text-sm mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis ipsum eget tristique iaculis. Curabitur tincidunt tristique arcu nec ullamcorper. Proin cursus non augue vel dignissim.
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  