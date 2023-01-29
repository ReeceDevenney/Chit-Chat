
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
    message: "test message 8",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 9",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 10",
    sendDate: "Fri, 8:00 AM",
    fromMe: false
  },
  {
    message: "test message 11",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 12",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 13",
    sendDate: "Fri, 8:00 AM",
    fromMe: false
  },
  {
    message: "test message 14",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
  {
    message: "test message 15",
    sendDate: "Fri, 8:00 AM",
    fromMe: false
  },
  {
    message: "test message 16",
    sendDate: "Fri, 8:00 AM",
    fromMe: true
  },
]

function Chatbox() {
  return (
    <div className="col-span-9 h-screen flex flex-col justify-end">
      <div className="h-20 border-b-2 border-black bg-slate-100 ml-[3px]">
        <div className="text-center font-bold text-2xl">Test Name</div>
      </div>
      <div className="text-left mb-6 pt-2 flex flex-col-reverse overflow-auto">
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
      <div className="text-center mb-6">
        <textarea className="border border-slate-600 p-2 w-11/12 focus:outline-none rounded-2xl resize-none text-sm left-1/3 col-span-9"></textarea>
      </div>
    </div>
  );
}

export default Chatbox;