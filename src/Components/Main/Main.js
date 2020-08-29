import React, { useState } from 'react';
import './Main.css';
import Footer from '../Footer/Footer';
import First from '../First/First';
import Details from '../Details/Details';
import Memo from '../Memo/Memo';
import Congratulate from '../Congratulate/Congratulate';
const Main = (props) => {
    // console.log(props.first);
    let firstData = props.first;
    let realData = props.data;
    const [congratulate,setCongratulate] = useState(false);
    const [memoRecipes, setMemoRecipes] = useState([]);
    let ck = [(realData.length === 0 || realData.length ===25 || realData.meals == null)];
    const finalCartDetails = (data) => {
        // console.log(data);
        setMemoRecipes(data);
    }
    const afterHandleMemo = (memo) => {
        // return <App></App>
        // window.history.go();
        setCongratulate(true);
    }
    const afterCongratulate = (reload) => {
        // return <App></App>
        window.history.go();
        // setCongratulate(true);
    }
    return (
        <div>
            <div className="jumbotron main text-center">
                {
                    ck.map(c => {
                        if(congratulate){
                            return <Congratulate key={congratulate} afterCongratulate={afterCongratulate}></Congratulate>
                        }
                        else if(memoRecipes.length > 0){
                            return <Memo key={memoRecipes.length} afterHandleMemo={afterHandleMemo} yourRecipes={memoRecipes}></Memo>
                        }
                        else if(!c){
                            // console.log(c);
                            return <Details finalCartDetails={finalCartDetails} className="container" key={c} data={(realData)}></Details>;
                        }else{
                            return <First key={c} data={(firstData)}></First>;
                        }
                        // return 0;
                    })
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;