export default function Title({
    children: description = 'Descrição eleições',
}) {

    return (
        <span className="font-mono font-semibold text-base">
            {description}
        </span>
    )
}
