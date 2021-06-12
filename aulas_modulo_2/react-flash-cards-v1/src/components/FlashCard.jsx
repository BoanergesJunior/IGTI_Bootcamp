export default function FlashCard({
    id = '',
    title = 'Titulo do card', 
    description = 'Descricao do card',
    showFlashCardTitle = true,
    onToggleFlashCard = null
}) {

    const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm'

    function handleCardClick() {
        if(onToggleFlashCard){
            onToggleFlashCard(id)
        }
    }

    return (
        <div className={`shadow-md p-4 m-2 w-80 h-48 cursor-pointer
                         bg-blue flex items-center justify-center 
                         font-mono font-semibold ${fontSizeClassName}`}
                         onClick={handleCardClick}>
            {showFlashCardTitle ? title : description}
        </div>
    )
}
