interface props {
    text: string;
    onClick: () => void;
    type?: "edit" | "delete";
}

export default function Button({text, onClick, type}: props) {
    const color = type === "edit" ? "bg-green-500 hover:bg-green-700" : "bg-red-500 hover:bg-red-700";
    return (
        <button
            className={`${color} text-white font-boldÒ px-2 rounded`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
