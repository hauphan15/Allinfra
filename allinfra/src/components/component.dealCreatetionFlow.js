
function DealCreationFlow() {
    return (
      <div className="flex h-screen">
        <div className="flex flex-col justify-between w-20 h-full text-center relative border-r-2">
            <div>
                <div className="flex">
                    <img className="p-5" src="allinfra-logo.PNG"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-white z-10 h-6 w-6 absolute rounded-full border text-slate-400 p-1 -right-3 top-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <div className="p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div className="p-5 border-r-2 border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div className="p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div className="p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
            </div>
            <div>
                <img src="uk-round-flag.png" className="p-5 mx-auto" />
            </div>
        </div>
        <div className="bg-slate-100 w-full h-full">
            <div className="flex py-5 px-10 justify-between">
                <div className="font-bold text-2xl">Deals</div>
                <div className="flex">
                    <div className="font-medium text-blue-600 mr-2 h-10 w-10 bg-cyan-100 rounded-full text-center align-middle p-1.5">RY</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto p-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="m-auto mt-36 h-60 w-96 bg-slate-200 rounded-lg text-center flex flex-col justify-around p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <div className="font-bold text-xl">No deals created</div>
                <div className="font-medium">There are currently no deals created</div>
                <button className="bg-blue-600 text-white p-2 font-medium rounded-lg">Create deal</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default DealCreationFlow;
  