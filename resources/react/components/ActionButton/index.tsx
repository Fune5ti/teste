interface props {
    onClick: () => void;
    text: string;
}

export default function ActionButton({onClick, text}: props) {
    return (
        <div className="flex justify-center">
            <button
                onClick={onClick}
                className="block text-white bg-gray-900 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="button"
            >
                {text}
            </button>
        </div>
    )
}
