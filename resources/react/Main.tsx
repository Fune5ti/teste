import {AgGridReact} from 'ag-grid-react';
import {useState, useEffect} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionButton from "./components/ActionButton";
import CreateUserModal from "./components/CreateUserModal";
import {createUser, deleteUser, getUsers, updateUser} from "./services/requests";
import {ToastContainer} from "react-toastify";
import Button from "./components/Button";
import {ICreateUser, User} from "./types/User";

function Main() {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        {field: "id", headerName: "ID", flex: 1, filter: true},
        {field: "name", headerName: "Nome", flex: 1, filter: true},
        {field: "username", headerName: "Nome de utilizador", flex: 1, filter: true},
        {field: "email", headerName: "Email", flex: 1, filter: true},
        {
            headerName: "Actions",
            field: "actions",
            flex: 1,
            cellRenderer: (params) => (
                <div className="flex justify-center items-center space-x-2">
                    <Button text="Edit" onClick={() => handleEdit(params.data)} type="edit"/>
                    <Button text="Delete" onClick={() => handleDelete(params.data)} type="delete"/>
                </div>
            ),
        },
    ]);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const openModal = () => {
        setOpenCreateModal(true);
    };

    const closeModal = () => {
        setOpenCreateModal(false);
    };

    const reloadTasks = () => {
        getUsers().then((data) => {
            setRowData(data.users);
        });
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        openModal();
    };

    const dispatchEditRequest = (data: ICreateUser) => {
        updateUser(selectedUser.id, data).then((responseData) => {
            if (responseData.user) {
                reloadTasks();
            }
        });
    }
    useEffect(() => {
        getUsers().then((data) => {
            setRowData(data.users);
        });
    }, []);
    const handleDelete = (user) => {
        deleteUser(user.id).then(() => {
            reloadTasks()
        });
    };
    const handleCreateUser = (data) => {
        createUser(data).then((responseData) => {
            if (responseData.user) {
                reloadTasks();
            }
        });
    }
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Header/>
            <div className="flex-grow flex flex-col items-center justify-center p-6">
                <div className="bg-gray-800 m-5 p-5 w-11/12 rounded">
                    <ActionButton onClick={openModal} text="Criar Usuario"/>
                </div>

                <div
                    className="ag-theme-quartz-dark shadow-lg rounded-lg w-11/12"
                    style={{height: 500}}
                >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                        rowHeight={60}
                        pagination={true}
                        paginationPageSize={10}
                        paginationPageSizeSelector={[10, 20, 30]}
                    />
                </div>
            </div>
            {openCreateModal && (
                <CreateUserModal
                    onClose={closeModal}
                    user={selectedUser}
                    onSubmit={(data) => {
                        if (selectedUser) {
                            dispatchEditRequest(data)
                        } else {
                            handleCreateUser(data)
                        }
                    }}
                />
            )}
            <Footer/>
            <ToastContainer/>
        </div>
    );
}

export default Main;
