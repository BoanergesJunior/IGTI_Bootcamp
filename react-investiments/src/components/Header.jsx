export default function Header({children}) {
    return (
        <div className="flex flex-col border rounded-lg p-2 text-center m-5 bg-white">
            {children}
        </div>
    )
}
