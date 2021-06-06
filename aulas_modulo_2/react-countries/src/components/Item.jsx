export default function Item({children: value = 'Valor', label = 'Nome: '}) {
    return (
        <div>
            <span className="text-sm">
                <strong>{label}</strong>
                {value}
            </span>
        </div>
    )
}
