// @ts-ignore
import ReactDOM from 'react-dom/client';
import Main from "./Main";
import '../css/app.css';
import 'react-toastify/dist/ReactToastify.css';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ReactDOM.createRoot(document.getElementById('app')).render(
    <Main />
);
