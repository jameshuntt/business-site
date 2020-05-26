import React,{Component}from 'react';
import Card from './Card';


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row ">
                    <div className="col-lg-4" >
                        <Card imgsrc={'./assets/user-empty-avatar.png'} title={'James'} subtitle={'Chief Executive Officer'}text={"On the Rare occasion he's not cooking up the next big business move for our business or yours, he enjoys baking and long walks on the beach."}/>
                    </div>
                    <div className="col-lg-4">
                        <Card imgsrc={'./assets/chase.png'} title={'Chase'} subtitle={'Chief Technology Officer'} text={"If he's not making sure we are using the latest and greatest techonologies, then he's probably out breaking hearts."}/>
                    </div>
                    <div className="col-lg-4">
                        <Card imgsrc={'./assets/user-empty-avatar.png'} title={'Elijah'} subtitle={'Chief Financial Officer'}text={"When he's not ensuring every penny is allocated to correct place responsibly, he teaches a spinning class at the local gym."}/>
                    </div>
                </div> 
            </div>

        );
    }
}

export default Cards;