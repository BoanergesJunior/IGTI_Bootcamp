export default function CheckboxInput({
    labelDescription = 'Descricao do checkbox ',
    inputValue = 'Valor padrao do input',
    onCheckboxChange = null,
    id = 'id_input_checkbox'
}) {
    function handleInputChange() {
        if(onCheckboxChange) {
            onCheckboxChange()
        }
    }   

    return (
        <div className="flex flex-row items-center space-x-2 my-4">
            <input autoFocus id={id} className="border p-1" type="checkbox" value={inputValue} onChange={handleInputChange}/>
            <label className="text-sm text-gray-500 mb-2" htmlFor={id}>
                {labelDescription} 
            </label>
        </div>
    )
}
