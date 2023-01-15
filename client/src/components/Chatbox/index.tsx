

function Chatbox() {
  return (
    <div className="col-span-9 h-screen flex flex-col justify-end">
      <div className="text-left mb-6 flex flex-col">
        <p className="flex flex-col items-end mr-12 mb-8 rounded-lg bg-slate-300 ml-auto px-6 max-w-4xl flex-wrap">message 1message 1message1 message1m essage1me ssage1mes sage sage1m essage 1messa ge1mes 1message1 message1message1me ssage1messa ge1message</p>
        <p className="flex flex-col items-start ml-12 mb-8 rounded-lg bg-slate-300 mr-auto px-6 max-w-screen-sm flex-wrap">message2 asdf text-starttext-starttext-start age 1message 1message1 message1m essage1me ssage1mes </p> 
        <p className="flex flex-col items-end mr-12 mb-8 rounded-lg bg-slate-300 ml-auto px-6 max-w-screen-sm flex-wrap">message1 testing some testing stuff</p>
      </div>
      <div className="text-center mb-6">
        <textarea className="border border-slate-600 p-2 w-11/12 focus:outline-none rounded-2xl resize-none text-sm left-1/3 col-span-9"></textarea>
      </div>
    </div>
  );
}

export default Chatbox;