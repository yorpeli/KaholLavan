import React from 'react';
import '../Styles/styles.scss';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import MessageBox from './messageBox';
import firebase from 'firebase/app';
import 'firebase/database';
import moment from 'moment';

class Main extends React.Component{
    state={
        valueSet: [],
        benny:null,
        yair:null,
        askFor:'',
        error:''
    }


    onChangeMe = (e)=>{
        this.setState({
            askFor: e.target.value,
        });
    }
    
    clickMe = (e) => {
        const db = firebase.database();
        const today =  moment().format('MMMM Do YYYY').toString();
        if (this.state.askFor.trim().length > 3){
        db.ref('Suggestions/'+today+"/"+moment().format('HH:mm:ss a').toString()).set(this.state.askFor).then(()=>{
            this.setState({
                askFor:'',
                error:'...רשמנו לפנינו ונוסיף'
            })
            document.getElementById("input_vox").value = '';
            setTimeout(() => {
                this.setState({
                    error:``
                })  
            }, 5500);
            
        });
        } else {
            this.setState({
                error:`אופסי... משהו לא הסתדר`
            })
            setTimeout(() => {
                this.setState({
                    error:`שננסה שוב?`
                })  
            }, 3000);
            setTimeout(() => {
                this.setState({
                    error:``
                })  
            }, 5500);
            
        }
    }
    


    componentDidMount(){
        const db = firebase.database().ref('Values');
        db.once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                this.setState((prevState)=>(
                    this.state.valueSet.push(child.val())
                    ));      
            }); 
            const array = this.state.valueSet
            const rand = Math.floor(Math.random() * array.length) + 0;
            this.setState(()=>({
                benny: array[rand].b,
                yair: array[rand].a
            }));
        const dba = firebase.database();
        const dbt = dba.ref('Analytics/Load/'+moment().format('MMMM Do YYYY').toString());
        dbt.transaction ((count)=>{
            return count +1;
        });
        }).catch((e)=>{
            console.log(e);
        });
    };

    anotherOne = ()=>{
        const db = firebase.database();
        const dbt = db.ref('Analytics/LoadExisting/'+moment().format('MMMM Do YYYY').toString());
        dbt.transaction ((count)=>{
            return count +1;
        });
        const array = this.state.valueSet
        const rand = Math.floor(Math.random() * array.length) + 0;
        this.setState(()=>({
            benny: array[rand].b,
            yair: array[rand].a
        }));

    };

    render(){   
        if (!this.state.benny || !this.state.yair){
            return(
                <div className = 'container_box col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
                    <Loader/>
                </div>
            )
        } else {
        //const id = this.props.match.params.id? (this.props.match.params.id) : (`no id`);
        //console.log(id)
            return(
                <div> 
                    <div className = 'row message_row col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3'>
                        <Header/>
                        <MessageBox className ='col-12' 
                        profile={'YairTheKing'}
                        name={`יאיר לפיד Yair Lapid`} 
                        msg={this.state.yair}
                        img={require('../assets/yair.jpg')}
                        device='iPhone'
                        />
                        <MessageBox className ='col-12' 
                        profile={`Benihuta`}a
                        name={`בני גנץ Benny Gantz`} 
                        msg={this.state.benny}
                        img={require('../assets/benny.jpg')}
                        device='Android'
                        />
                    </div>
                    <div className='button_box col-12'>
                        <button class="learn-more" onClick={this.anotherOne}>
                            <div class="circle">
                                <span class="icon arrow"></span>
                            </div>
                                <p class="button-text">עוד אחד</p>
                        </button>
                    </div>
                    <div>
                        
                    
                        <div className ='button_box input_box col-10 col-sm-8 offset-sm-2 col-md-6 offset-md-3'>
                            <button onClick={this.clickMe} className='btn btn-primary'>שלח/י</button>
                            <input id="input_vox" onChange = {this.onChangeMe} className='input_line' type='text' placeholder=' תוסיפו גם...'/>
                        </div>
                        <p className='input_error col-4 offset-4'>{this.state.error}</p>
                    


                    </div>
                </div>
            )   
        }};
}

export { Main as default };

// <div>
// <p>{`and.... ${this.state.benny} and Yair ${this.state.yair}`}</p>
// </div>

