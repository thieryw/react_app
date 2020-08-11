import React, { FormEvent, SyntheticEvent, ReactComponentElement } from "react";

type Props = {
    numberArr: number[];
}

const ListElement: React.FunctionComponent<{number: number}> = ({number})=>{

    return (
        <li>{number}</li>
    )

}


export const List: React.FunctionComponent<Props> = ({numberArr})=>{
    return (
        <div>
            <ul>
                {
                    numberArr.map(cur => <ListElement key={cur} number={cur * 2}/>)
                }
            </ul>
        </div>
    )

}


export class Form extends React.Component<{},{
    value: string}>{

    constructor(Props: {}){
        super(Props);

        this.state = {
            "value": "",
        }
    }



    private handleChange = (event: any)=>{
        
        this.setState({
            value: event.target.value



        });

    }

    private handleSubmit = (event: React.FormEvent)=>{
        alert(`hello ${this.state.value}`);
        event.preventDefault();

    }


    render(){
        return (
            <div>
                <h1>hello {this.state.value}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name:
                        <input type="text" value={this.state.value}
                        onChange={this.handleChange}
                       ></input>
                    </label>



                </form>

            </div>
        )
    }

}

export class EssayForm extends React.Component<{},{value: string;}>{
    constructor(props: {}, text: string){
        super(props);
        this.state = {
            "value": "Please write an essay on your favorite DOM element"
        }
    }

    private initialText = "Please write an essay on your favorite DOM element";

    private onSubmit = (event: any)=>{
        alert(`An essay was submitted: ${this.state.value}`);
        event.preventDefault();

    }

    private onChange = (event: any)=>{
        this.setState({
            value: event.target.value
        })
    }

    private paragraph = ()=>{


        if(this.state.value !== this.initialText){
            return this.state.value;
        }

        return "hello";
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        essay:
                        <textarea value={this.state.value} onChange={this.onChange}>

                        </textarea>
                    </label>

                    <input type="submit" value="submit"/>
                </form>
                <p>{this.paragraph()}</p>
            </div>
        )
    }

}


export class FlavorForm extends React.Component<{},{value: string}>{

    constructor(props: {}){
        super(props);

        this.state = {
            "value": "coconut"
        }
    }

    private onChange = (event: any)=>{

        this.setState({
            value: event.target.value
        })
    }


    private onSubmit = (event: any)=>{
        alert(`${this.state.value} was chosen`);


        event.preventDefault();

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.value} onChange={this.onChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">coconut</option>
                            <option value="mango">Mango</option>
                        </select>

                        <input type="submit" value="submit"/>
                    </label>
                </form>
            </div>
        )
    }
}


const FancyBorder: React.FunctionComponent<{color: string}> = ({color, children})=>{
    return (
        <div style={{border: `solid ${color} 2px`}}>
            {children}
        </div>

    )
}

export const LargeElement: React.FunctionComponent = ()=>{
    return(
        <FancyBorder color="blue">

            <h1>Le Zizi</h1>
            <p>Il est vraiment tres dur</p>


        </FancyBorder>
            
        
        
    )
}

const ColoredText: React.FunctionComponent<{color: string}> = ({color})=>{
    return (
        <p style={{color:`${color}`}}>
            le zizi est un object qui merite d'etre sucer.
        </p>
    )
}





const OtherLargeElement: React.FunctionComponent<{blue: any; red: any}> = ({blue, red})=>{

    console.log(red);

    return(
        <div>
            <div>
                {blue}
            </div>
            <div>
                {red}
            </div>
        </div>
    )

}

export const Principal: React.FunctionComponent = ()=>{
    return (
        <OtherLargeElement blue={<ColoredText color="blue"/>} red={<ColoredText color="red"/>}/>
    )
}



const Dialog: React.FunctionComponent<{title: string; message: string}> = ({title, message})=>{
    return(
        <FancyBorder color="maroon">
            <h1>{title}</h1>
            <p>{message}</p>
        </FancyBorder>
    )
}

export const WelcomeDialog: React.FunctionComponent = ()=>{
    return(
        <Dialog title="Hello" message="welcome to hell on earth"/>
    )
}
    


