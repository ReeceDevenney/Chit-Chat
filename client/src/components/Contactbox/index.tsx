function Contactbox() {

    interface Messages {
        name: string;
        message: string;
    }

    const messages: Messages[] =[
        {
            name: 'Reece Devenney1',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney2',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney3',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney4',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney5',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney6',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney7',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney8',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney9',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney10',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney11',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney12',
            message: "This is a test message for testing another thing"
        },
        {
            name: 'Reece Devenney13',
            message: "This is a test message for testing another thing"
        },
    ] 
    return(
        <div className="flex-0 h-full z-0">
        {messages.map((message) => 
        <div className="text-center hover:bg-slate-100 hover:cursor-pointer h-20 flex z-10">
          <div className="bg-gray-300 rounded-full h-14 w-14 my-auto ml-4 items-center flex shrink-0">
            <div className="mx-auto font-bold text-3xl">{message.name[0]}</div>
          </div>
          <div className="text-left mb-auto mt-2 px-4">
            <div className="font-medium">{message.name}</div>
            <p className="text-sm">{message.message}</p>
          </div>
        </div>
        )}
        </div>
    )
}

export default Contactbox;