import React,{Component}from 'react';
import Card from './Card';


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row ">
                    <div className="col-lg-4">
                        <Card imgsrc={'./assets/user-empty-avatar.png'} title={'James'} text={"things and stuff cant do lorem ipsum for this cause react sucks a big fat one"}/>
                    </div>
                    <div className="col-lg-4">
                        <Card imgsrc={'./assets/user-empty-avatar.png'} title={'Chase'} text={"things and stuff cant do lorem ipsum for this cause react sucks a big fat one"}/>
                    </div>
                    <div className="col-lg-4">
                        <Card imgsrc={'./assets/user-empty-avatar.png'} title={'Elijah'} text={"things and stuff cant do lorem ipsum for this cause react sucks a big fat one"}/>
                    </div>
                </div> 
            </div>

        );
    }
}

export default Cards;