import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

const StartUp = () => {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
};

export default StartUp;
