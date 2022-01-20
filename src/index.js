import ReactDOM from 'react-dom';
import ExpenseContextProvider from "./store/expense-context"

import './index.css';
import App from './App';

ReactDOM.render(<ExpenseContextProvider><App /></ExpenseContextProvider>, document.getElementById('root'));
