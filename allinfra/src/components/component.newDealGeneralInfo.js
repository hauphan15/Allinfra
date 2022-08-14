

function GeneralInfo() {
  return (
    <div className="">
        <div className="flex justify-between mx-auto w-1/2 my-7">
            <div className="text-2xl font-bold">New deal</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div className="border">
            <div className="w-4/5 flex mx-auto">
                <div className="basis-1/4 border-x border-b-2 border-b-blue-700 h-16 flex p-2">
                    <div className="mx-2 h-10 font-medium w-10 rounded-full border-2 text-blue-700 border-blue-700 text-sm p-2 m-auto text-center">01</div>
                    <div className="">
                        <div className="font-medium text-blue-700">General information</div>
                        <div className="text-sm font-medium text-slate-400">Step 01</div>
                    </div>
                </div>
                <div className="basis-1/4 border-x h-16 flex p-2">
                    <div className="mx-2 h-10 font-medium w-10 rounded-full border-2 text-sm p-2 m-auto text-center">02</div>
                    <div className="ml-1">
                        <div className="font-medium text-slate-600">Deal specific details</div>
                        <div className="text-sm font-medium text-slate-400">Step 02</div>
                    </div>
                </div>
                <div className="basis-1/4 border-x h-16 flex p-2 ">
                    <div className="mx-2 h-10 font-medium w-10 rounded-full border-2 text-sm p-2 m-auto text-center">03</div>
                    <div className="ml-1">
                        <div className="font-medium text-slate-600">Deal eligibility</div>
                        <div className="text-sm font-medium text-slate-400">Step 03</div>
                    </div>
                </div>
                <div className="basis-1/4 border-x h-16 flex p-2">
                    <div className="mx-2 h-10 font-medium w-10 rounded-full border-2 text-sm p-2 m-auto text-center">04</div>
                    <div className="ml-1">
                        <div className="font-medium text-slate-600">Pre-deal solicitation</div>
                        <div className="text-sm font-medium text-slate-400">Step 04</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto w-1/2 my-7">
            <div className="font-bold text-xl mb-3">General information</div>
            <div className="text-slate-600 font-medium text-base">Define your deal's use of proceeds. Give it a short description to help investors and regulators. Add a pre-deal phase to gather feedback from the investors. </div>
            <div className="mt-14">
                <div className="text-xs font-medium text-slate-500 mb-1">Use of proceeds</div>
                <input className="rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400" placeholder="Use of proceeds" />
            </div>
            <div className="mt-7">
                <div className="text-xs font-medium text-slate-500 mb-1">General description</div>
                <input className="rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400" placeholder="Describe the deal in a few words" />
            </div>
            <div className="mt-7">
                <div className="text-xs font-medium text-slate-500 mb-1">Deal currency</div>
                <div className="relative">
                    <input className="px-10 rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400" placeholder="Choose deal currency" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-slate-400 right-2 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className="h-6 w-6 bg-slate-200 rounded-full absolute top-2.5 left-2"></div>
                </div>
            </div>
            <div className="mt-7">
                <div className="text-xs font-medium text-slate-500 mb-1">Ticker symbol</div>
                <input className="rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400" placeholder="Symbol used to trade the bond" />
            </div>
            <div className="mt-7">
                <div className="text-xs font-medium text-slate-500 mb-1">Anticipated issuance date</div>
                <div className="relative">
                    <input className="pr-10 rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400" placeholder="Choose an approximate date for bond issuance" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-slate-400 right-2 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
            <div className="mt-7 px-5 border rounded-lg border-slate-400">
                <div className="flex py-4">
                    <div className="bg-blue-600 mr-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium">Add a pre-deal phase</div>
                </div>
                <div className="pb-5">
                    <p className="text-sm text-slate-600 font-medium">
                        Checking this box will add an additional phase to you deal. 
                        This will help you gather feedback from investors before publishing the deal. 
                        After this pase ends, you will be able to update deal parameters based on the received feedback
                    </p>
                </div>
            </div>
            <div className="mt-7">
                <div className="text-xs font-medium text-slate-500 mb-1">Pre-deal response date limit</div>
                <div className="relative">
                    <input className="pr-10 rounded border-slate-400 border w-full p-3 font-medium text-sm bg-slate-50 focus:outline-blue-400" placeholder="Choose a deadline for pre-deal responses" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-slate-400 right-2 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
            <div className="mt-14 justify-between flex">
                <button className="p-2 border-slate-400 text-center w-28 text-sm rounded font-bold border">Cancel</button>
                <button className="p-2 text-center w-28 text-sm bg-blue-600 rounded font-bold text-white">Next step</button>
            </div>
        </div>
    </div>
  );
}

export default GeneralInfo;
