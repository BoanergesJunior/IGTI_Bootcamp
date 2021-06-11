export default function Button({
    children: description = 'Descricao do botao', 
    onButtonClick = null}) {

    function handleButtonClick() {
        if(onButtonClick) {
            onButtonClick()
        }
    }

    return <button 
            className="bg-gray-200 p-2 rounded-md m-1"
            onClick={handleButtonClick}>
                {description}
            </button>
}
