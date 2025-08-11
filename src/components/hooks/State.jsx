import { useState } from "react";

export const State = () => {

    let [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(() => count + 1 );
    }

    return(
        <div className="flex items-center h-screen justify-center font-semibold text-2xl gap-2 flex-col">
            <h1>{count}</h1>
            <button onClick={handleCount} className="cursor-pointer py-1 px-2 border border-cyan-300 rounded-sm">
                Click to increase
            </button>
        </div>
    );
}