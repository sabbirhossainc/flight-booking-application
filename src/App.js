import { Provider } from "react-redux";
import Header from './components/Header'
import Booking from './components/Booking'
import './index.css';
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Booking/>
        </Provider>
    );
}
