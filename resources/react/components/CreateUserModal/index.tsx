import {useState, useEffect} from 'react';
import {ICreateUser} from "../../types/User";

interface props {
    onClose: () => void;
    onSubmit: (data: ICreateUser) => void;
    user?: ICreateUser | null;
}

function CreateUserModal({onClose, onSubmit, user}: props) {
    const [data, setData] = useState<ICreateUser>({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        if (user) {
            setData({
                name: user.name || '',
                username: user.username || '',
                email: user.email || '',
                password: '',
                password_confirmation: '',
            });
        }
    }, [user]);

    return (
        <div>
            <div
                className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-700 bg-opacity-75">
                <div className="relative p-4 w-full max-w-2xl h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div
                            className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {user ? 'Editar Usuário' : 'Criar Novo Usuário'}
                            </h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={(e) => setData({...data, name: e.target.value})}
                                        value={data.name}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Escreva o nome"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nome de Usuario
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={(e) => setData({...data, username: e.target.value})}
                                        value={data.username}
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Nome de Usuario"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           onChange={(e) => setData({...data, password: e.target.value})}
                                           value={data.password}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           required={!user}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password_confirmation"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmação
                                        Password</label>
                                    <input type="password" name="password_confirmation"
                                           id="password_confirmation" placeholder="••••••••"
                                           onChange={(e) => setData({...data, password_confirmation: e.target.value})}
                                           value={data.password_confirmation}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           required={!user}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="Email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="Email"
                                        id="Email"
                                        onChange={(e) => setData({...data, email: e.target.value})}
                                        value={data.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Email"
                                        required
                                    />

                                </div>

                            </div>
                            <button
                                onClick={() => {
                                    onSubmit(data);
                                    onClose();
                                }}
                                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-950 dark:focus:ring-primary-800"
                            >
                                <svg
                                    className="mr-1 -ml-1 w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {user ? 'Atualizar' : 'Confirmar'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUserModal;
