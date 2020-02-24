import React,{ Component } from 'react';
import Tuto from './components/Tuto';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class App extends Component {
    state = {
        todos: [],
        str: 'submit',
        num: null,
        ModalIsOpen: false,
        FormIsOpen: false,
        email: '',
        count: 0,
    };

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({ todos: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleClick(){
        this.setState({num: this.state.num+1});
        this.setState({str: "ボタンが押された回数："});
    }
    handleClickModal(){
        this.setState({ModalIsOpen: true});
    }
    handleClickClose(){
        this.setState({ModalIsOpen: false});
    }
    handleClickForm(){
        this.setState({FormIsOpen: true});
    }
    textCount(length){
        this.setState({count: length});
    }
    textChange(text){
        this.setState({email: text});
    }

    render() {

        let modal;
        if(this.state.ModalIsOpen){
            modal = (
                <div>
                {this.state.todos.map(item => (
                     <div key={item.id} style={{textAlign:'center'}}>
                        <p>ID:{item.id}</p>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <h2>{this.state.num}</h2>
                        <button onClick={()=>
                        this.handleClick()
                        }>{this.state.str}{this.state.num}</button>
                        <a href='/post/{item.id}'>リンク</a>
                        <button
                            onClick={()=>{this.handleClickClose()}}>
                            閉じる
                        </button>
                     </div>
                ))}
                </div>
            );
        }
        let form;
        if(this.state.FormIsOpen){
            form = (
                <div>
                    <form>
                        <input
                            value= {this.state.email}
                            onKeyUp={e =>{this.textCount(e.target.value.length)}}
                            onChange={e =>{this.textChange(e.target.value)}}
                            />
                        <textarea />
                        <input
                        type='submit'

                        />
                        <span>{this.state.count}</span>
                    </form>
                </div>
            );
        }

        return (
            <div>
                {modal}

                <button
                    onClick={()=>{this.handleClickModal()}}>
                    表示する
                </button>
                {form}
                <button
                    onClick={()=> {this.handleClickForm()}}>
                    フォームを表示
                </button>

                <BrowserRouter>
                  <div>
                    <Route path='/tuto' component={Tuto} />
                    <span><Link to='/tuto'>tutoへ</Link></span>
                  </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;