import { useState } from "react"

export default function FlashCard({
    title = 'Titulo do card', 
    description = 'Descricao do card'
}) {

    const [showTitle, setShowTitle] = useState(true)

    const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm'

    function handleCardClick() {
        setShowTitle(currentShowTitle => !currentShowTitle)
    }

    return (
        <div className={`shadow-md p-4 m-2 w-80 h-48 cursor-pointer
                         bg-blue flex items-center justify-center 
                         font-mono font-semibold ${fontSizeClassName}`}
                         onClick={handleCardClick}>
            {showTitle ? title : description}
        </div>
    )
}
