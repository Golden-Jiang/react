import { useState } from "react"

const StateComp = () => {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <>
            <button onClick={handleClick}>
                點擊次數 {clicks}
            </button>
        </>
    )
}

export default StateComp