import ReactDOM from 'react-dom';
import $ from 'jquery';
import './globals.css';
import App from './App';

// @ts-ignore
const root = ReactDOM.createRoot($('#root')[0]);
root.render(<App />);
