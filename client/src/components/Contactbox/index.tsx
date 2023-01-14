function Contactbox() {

    interface Messages {
        name: string;
        message: string;
    }

    const messages: Messages[] =[
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney3',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney2',
            message: "This is a test message for testing another ting"
        },
        {
            name: 'Reece Devenney2',
            message: "This is a test message for testing another ting"
        },
    ] 
    return(
        <div>
        {messages.map((message) => 
        <div className="text-center outline outline-1 h-20 flex">
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