import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const onClickUsers = () => {
    // get()：データを取得
    // then()：取得後の関数を設定できる／引数には取得したデータの情報が入る
    // オブジェクトの値を指定することで中身を参照できる
    // catch()：エラーが起きたときの関数を設定できる
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      console.log(result.data);
    }).catch((error) => console.log(error));
  };

  const onClickUser1 = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/3').then((result) => {
      console.log(result.data);
    }).catch((error) => console.log(error));
  }

  const onClickPhotos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos/1').then((result) => {
      console.log(result.data.url);
    }).catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
      <button onClick={onClickPhotos}>album</button>
    </div>
  );
}

export default App;
