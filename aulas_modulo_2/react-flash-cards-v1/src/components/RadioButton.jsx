import { getNewId } from "../services/idService";

export default function RadioButton({
    id = getNewId(),
    name = 'radioButton',
    buttonChecked = true,
    onButtonClick = null,
    children: buttonDescription = 'Descrição do botão'
}) {

    function handleRadioButtonChange() {
        if(onButtonClick) {
            onButtonClick()
        }
    }

    return (
        <div className="flex flex-row items-center">
            <input id={id} 
                type="radio" 
                name={name} 
                checked={buttonChecked} 
                onChange={handleRadioButtonChange}/>
      
            <label htmlFor="id">{buttonDescription}</label>
        </div>
    )
}
