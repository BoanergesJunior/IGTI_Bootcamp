import { useState } from "react"

export default function FlashCard({
    title = 'Titulo do card', 
    description = 'Descricao do card'
}) {

    const [showTitle, setShowTitle] = useState(true)

    const fontSizeClassName = showTitle ? 'text-xl' : 'text-md'

    function handleCardClick() {
        setShowTitle(currentShowTitle => !currentShowTitle)
    }

    return (
        <div className={`shadow-md p-4 w-64 h-32 cursor-pointer
                         bg-blue flex items-center justify-center 
                         font-mono font-semibold ${fontSizeClassName}`}
                         onClick={handleCardClick}>
            {showTitle ? title : description}
        </div>
    )
}
