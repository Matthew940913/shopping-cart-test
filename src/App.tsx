import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import { CartList } from 'components/cartlist';
import { InputForm } from 'components/form'
import { Card } from 'antd';

import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.min.css';

const {store, persistor} = configureStore()

function App() {
  return (
    <Card bordered={true} style={{ width: "600px", margin: "20px" }}>
      <div role="title" style={{ fontSize: "large" }}>
        Add to cart:
      </div>
      <Provider store={store}>
        <InputForm/>
        <CartList />
      </Provider>
    </Card>
  )
}

export default App;
