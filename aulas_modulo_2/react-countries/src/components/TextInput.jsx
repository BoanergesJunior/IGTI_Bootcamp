export default function TextInput({
    labelDescription = 'Descricao do label: ',
    inputValue = 'Valor padrao do input',
    onInputChange = null,
    id = 'id_input_text'
}) {
    function handleInputChange({currentTarget}) {
        if(onInputChange) {
            const newValue = currentTarget.value
            onInputChange(newValue)
        }
    }   

    return (
        <div className="flex flex-col my-4">
            <label className="text-sm text-gray-500 mb-2" htmlFor={id}>
                {labelDescription} 
            </label>
            <input autoFocus id={id} className="border p-1" type="text" value={inputValue} onChange={handleInputChange}/>
        </div>
    )
}
