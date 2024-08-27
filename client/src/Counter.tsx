import { useState } from "react"

function Counter(){

    const [count, setCount] = useState<number>(0)

    function handleAddCount(){
        setCount(c => c + 1)
    }

    function handleRemoveCount(){
        setCount(c => c -1)
    }

    function handleResetCount(){
        setCount(c => c = 0)
    }

    return(
        <>
            <main>
                <span>
                    <h2>Clicking App</h2>
                    <p>{count}</p>
                    <button onClick={() => handleAddCount()}>Add</button>
                    <button onClick={() => handleRemoveCount()}>Remove</button>
                    <button onClick={() => handleResetCount()}>Reset</button>
                </span>
            </main>
        </>
    )
}

export default Counter