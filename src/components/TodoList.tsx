import React, { useLayoutEffect } from "react";
import { stringify } from "querystring";

class TodoElements{
    readonly elements: string[] = [];

    public addElement(str: string){
        this.elements.push(str);
    }

    public removeElement(index: number){
        this.elements.splice(index, 1);
    }

    public removeAllElements(){
        while(this.elements.length > 0){
            this.elements.pop();
        }

    }

    


}

const todoElements: TodoElements = new TodoElements;

type Props = {
    submit: Function;
}

class TodoListInput extends React.Component<Props, {text: string}>{

    constructor(props: Props){
        super(props);
        this.state = {
            text: ""
        }
    }


    private handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            text: e.target.value
        })
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{

        this.props.submit(this.state.text);
        this.setState({
            text: ""
        })
        e.preventDefault();

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <legend>add to list</legend>
                <input value={this.state.text} type="text" onChange={this.handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}






type ElemProps = {
    elem: string;
    delete: Function;
    newSubmission: Function;
    index: number;
}

type ElemState = {
    className: string;
    isElemSelected: boolean;
    currentText: string;
}


class Element extends React.Component<ElemProps, ElemState>{
    constructor(props: {elem: string; delete: Function; newSubmission: Function; index: number}){
        super(props);
        this.state = {
            "className": "el",
            "isElemSelected": false,
            "currentText": this.props.elem
        }


    }

    private handleClick = ()=>{
        if(this.state.className === "el"){
            this.setState({
                className: "lineThrough"
            })

            return;
        }

        this.setState({
            className: "el"
        })

    }

    private handleElemSelected = ()=>{
        if(!this.state.isElemSelected){
            this.setState({
                isElemSelected: true

            })
        }

    }

    private handleNewSubmission = (e: React.FormEvent<HTMLFormElement>)=>{

        this.props.newSubmission(this.props.index, this.state.currentText);


        this.setState({
            isElemSelected: false
        })

        e.preventDefault();


    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            currentText: e.target.value
        })

    }




    private delete(e: number){

        this.props.delete(e);
    }

    render(){
        return(
            <li className={this.state.className}>
                <input onClick={this.handleClick} className="checkBox" type="checkbox"/>
                <p onClick={this.handleElemSelected}>
                    {
                        (()=>{
                            if(this.state.isElemSelected){
                                return (
                                    <form onSubmit={this.handleNewSubmission} >
                                        <input type="text" onChange={this.handleChange}/>
                                    </form>
                                )
                            }

                            return this.props.elem;
                        })()
                    }
                </p>
                <p className="delete" onClick={() => this.delete(this.props.index)}>X</p>
            </li>

        )
    }

}



export class TodoList extends React.Component<{}, {elements: TodoElements}>{

    constructor(props: {}){
        super(props);
        this.state = {
            "elements": todoElements
        };
    }

    private index = 0;

    private onSubmit = (el: string)=>{

        if(el.length === 0){
            return;
        }

        todoElements.addElement(el);

        this.setState({
            elements: todoElements
        })

        this.index = 0;


    }

    private delete = (index: number)=>{


        todoElements.removeElement(index);

        this.setState({
            elements: todoElements
        })

        this.index = 0;


    }

    private newSubmission = (index: number, newText: string)=>{
        todoElements.elements[index] = newText;

        this.setState({
            elements: todoElements
        })

        this.index=0;
    }

    private deleteAll = ()=>{
        todoElements.removeAllElements();
        this.setState({
            elements: todoElements
        })
        this.index = 0;
    }


    render(){
        return (
            <div className="todoList">
                <h1>Todo List</h1>
                <TodoListInput submit={this.onSubmit}/>

                <ul>
                    {
                        this.state.elements.elements.map(
                            cur => <Element 
                            elem={cur} delete={this.delete} 
                            newSubmission={this.newSubmission}
                            index={this.index++}/>
                        )
                    }
                </ul>

                {
                    (()=>{
                        if(this.state.elements.elements.length < 2){
                            return;
                        }

                        return (
                            <input type="submit" value="Delete All" onClick={this.deleteAll}/>
                        )


                    })()
                }


                
            </div>
        )
    }
}


