import React, { useLayoutEffect } from "react";
import { stringify } from "querystring";


type Store = {
    readonly tasks: readonly string[];
    addTask(task: string): void;
    removeTask(index: number): void;
    removeAllTasks(): void;
};

namespace Store {

    export async function fetch(): Promise<Store>{

        await new Promise(resolve=> setTimeout(resolve,1000));

        const tasks: string[] = [];

        const store: Store = {
            tasks,
            "addTask": element=> {
                tasks.push(element);
            },
            "removeTask": index => {
                tasks.splice(index, 1);
            },
            "removeAllTasks": ()=> {
                tasks.splice(0, store.tasks.length);
            }
        };

        return store;

    }

}

(async ()=>{

    const store = await Store.fetch();


})();





namespace TodoListInput {

    export type Props = {
        addTask: Store["addTask"];
    };

    export type State = {
        text: string;
    };

}


class TodoListInput extends React.Component<TodoListInput.Props, TodoListInput.State>{

    constructor(props: TodoListInput.Props) {
        super(props);
        this.state = { "text": "" };
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ "text": e.target.value })
    };

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.addTask(this.state.text);
        this.setState({ "text": "" })
    };

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <legend>add to list</legend>
            <input
                value={this.state.text}
                type="text"
                onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    );

}




namespace Element {

    export type Props = {
        task: string;
        removeTask: ()=> void;
        renameTask: (renamedTask: string)=> void;
    };

    export type State = {
        className: string;
        isElemSelected: boolean;
        currentText: string;
    };

}




class Element extends React.Component<Element.Props, Element.State>{
    constructor(props: Element.Props) {
        super(props);

        this.state = {
            "className": "el",
            "isElemSelected": false,
            "currentText": this.props.task
        };

    }

    private handleCheckboxClick = () => {

        if (this.state.className === "el") {
            this.setState({
                "className": "lineThrough"
            })

            return;
        }

        this.setState({
            className: "el"
        })

    }

    private handleElemSelected = () => {
        if (!this.state.isElemSelected) {
            this.setState({
                isElemSelected: true

            })
        }

    }

    private handleNewSubmission = (e: React.FormEvent<HTMLFormElement>) => {

        this.props.newSubmission(this.props.index, this.state.currentText);


        this.setState({
            isElemSelected: false
        })

        e.preventDefault();


    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentText: e.target.value
        })

    }

    render = () => (
        <li className={this.state.className}>
            <input onClick={this.handleCheckboxClick} className="checkBox" type="checkbox" />
            <p onClick={this.handleElemSelected}>
                {
                    this.state.isElemSelected ?
                        (
                            <form onSubmit={this.handleNewSubmission} >
                                <input type="text" onChange={this.handleChange} />
                            </form>
                        ) : (
                            this.props.task
                        )

                }
            </p>
            <p className="delete" onClick={this.props.removeTask}>X</p>
        </li>
    );


}



export class TodoList extends React.Component<{ store: Store; }, { elements: TodoElements }>{

    constructor(props: {}) {
        super(props);
        this.state = {
            "elements": todoElements
        };
    }

    private index = 0;

    private onSubmit = (el: string) => {

        if (el.length === 0) {
            return;
        }

        todoElements.addElement(el);

        this.setState({
            elements: todoElements
        })

        this.index = 0;


    }

    private delete = (index: number) => {


        todoElements.removeElement(index);

        this.setState({
            elements: todoElements
        })

        this.index = 0;


    }

    private newSubmission = (index: number, newText: string) => {
        todoElements.elements[index] = newText;

        this.setState({
            elements: todoElements
        })

        this.index = 0;
    }

    private deleteAll = () => {
        todoElements.removeAllElements();
        this.setState({
            elements: todoElements
        })
        this.index = 0;
    }


    render() {
        return (
            <div className="todoList">
                <h1>Todo List</h1>
                <TodoListInput submit={this.onSubmit} />

                <ul>
                    {
                        this.state.elements.elements.map(
                            cur => <Element
                                elem={cur} delete={this.delete}
                                newSubmission={this.newSubmission}
                                index={this.index++} />
                        )
                    }
                </ul>

                {
                    (() => {
                        if (this.state.elements.elements.length < 2) {
                            return;
                        }

                        return (
                            <input type="submit" value="Delete All" onClick={this.deleteAll} />
                        )


                    })()
                }



            </div>
        )
    }
}


