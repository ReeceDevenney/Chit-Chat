
interface Messages {
  message: string;
  sendDate: string;
  fromMe: boolean;
}

const messages: Messages[] = [
  {
    message: "test message 1",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 2",
    sendDate: "Fri, 8:00 AM",
    fromMe: false
  },
  {
    message: "test message 3",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 4",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 5",
    sendDate: "Fri, 8:00 AM",
    fromMe: false
  },
  {
    message: "test message 6",
    sendDate: "Fri, 8:00 AM",
    fromMe: false
  },
  {
    message: "test message 7",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 7",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 7",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 7",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 7",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
]

function Chatbox() {
  return (
    <div className="col-span-9 h-screen flex flex-col justify-end">
      <div className="text-left mb-6 flex flex-col-reverse overflow-auto">
        {messages.map(message =>
        message.fromMe? 
        <div>
          <p className="flex flex-col items-end mr-12 rounded-lg bg-slate-300 ml-auto px-6 max-w-4xl w-fit flex-wrap">{message.message}</p>
          <p className="flex flex-col items-end mr-12 mb-8 ml-auto px-6 max-w-4xl flex-wrap">{message.sendDate}</p>
        </div> :
        <div>
          <p className="flex flex-col items-start ml-12 rounded-lg bg-slate-300 mr-auto px-6 max-w-screen-sm w-fit flex-wrap">{message.message}</p>
          <p className="flex flex-col items-start ml-12 mb-8 mr-auto px-6 max-w-screen-sm flex-wrap">{message.sendDate}</p>
        </div> 
          )}
      </div>
      
      {/*<div className="text-left mb-6 flex flex-col">
        <div>
          <p className="flex flex-col items-end mr-12 rounded-lg bg-slate-300 ml-auto px-6 max-w-4xl flex-wrap">mess age 1mess age 1mess age1 mess age1m essage1me ssage1mes sage sage1m essage 1messa ge1mes 1message1 message 1message1me ssage1messa ge1message</p>
          <p className="flex flex-col items-end mr-12 mb-8 ml-auto px-6 max-w-4xl flex-wrap">Fri, 5:35 AM</p>
        </div>
        <div>
          <p className="flex flex-col items-start ml-12 rounded-lg bg-slate-300 mr-auto px-6 max-w-screen-sm flex-wrap">message2 asdf text-starttext-starttext-start age 1message 1message1 message1m essage1me ssage1mes </p>
          <p className="flex flex-col items-start ml-12 mb-8 mr-auto px-6 max-w-screen-sm flex-wrap">Fri, 5:36 AM</p>
        </div>
        <p className="flex flex-col items-end mr-12 mb-8 rounded-lg bg-slate-300 ml-auto px-6 w-fit max-w-screen-sm flex-wrap">message1 testing some testing stuff</p>
      </div> */}
      <div className="text-center mb-6">
        <textarea className="border border-slate-600 p-2 w-11/12 focus:outline-none rounded-2xl resize-none text-sm left-1/3 col-span-9"></textarea>
      </div>
    </div>
  );
}

export default Chatbox;