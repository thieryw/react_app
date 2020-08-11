import React from "react";



type PropsInput = {
    sum: number;
    onChange: Function;
    currency: Currency;
}

type Currency = "euro" | "dollar" | "rupee";



function convertCurrency(sum: number, initialCurrency: Currency, resultCurrency: Currency): number{

    if(initialCurrency === resultCurrency){
        return sum;
    }


    switch(initialCurrency){
        case "dollar" : return resultCurrency === "rupee" ? parseFloat((sum * 74.93).toFixed(2)) : parseFloat((sum * 0.85).toFixed(2));
        case "euro" : return resultCurrency === "rupee" ? parseFloat((sum * 88.27).toFixed(2)) : parseFloat((sum * 1.18).toFixed(2));
        case "rupee" : return resultCurrency === "dollar" ? parseFloat((sum * 0.013).toFixed(2)) : parseFloat((sum * 0.011).toFixed(2));

    }


}

class MoneyInput extends React.Component<PropsInput>{

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.props.onChange(e.target.value);
    }

    render(){
        return (
            <fieldset>
                <legend>Enter a sum of {this.props.currency}</legend>

                <input type="number" value={this.props.sum} onChange={this.handleChange}/>

            </fieldset>
        )
    }

}



export class Money extends React.Component<{},{currency: Currency; sum: number}>{

    constructor(props: {}){
        super(props);
        this.state = {
            "currency": "dollar",
            "sum": 0
        }
    }

    private changeDollar = (sum: number)=>{
        this.setState({
            currency: "dollar",
            sum
        })

    }
    private changeEuro = (sum: number)=>{
        this.setState({
            currency: "euro",
            sum
        })

    }

    private changeRupee = (sum: number)=>{
        this.setState({
            currency: "rupee",
            sum
        })
    }


    render(){
        const sum = this.state.sum;

        const dollars = convertCurrency(sum, this.state.currency, "dollar");
        const euros = convertCurrency(sum, this.state.currency, "euro");
        const rupees = convertCurrency(sum, this.state.currency, "rupee");



        
        return(

            <div>
                <h1>Currency Converter</h1>
                <MoneyInput sum={dollars} currency="dollar" onChange={this.changeDollar}/>
                <MoneyInput sum={euros} currency="euro" onChange={this.changeEuro}/>
                <MoneyInput sum={rupees} currency="rupee" onChange={this.changeRupee}/>

            </div>

        )
    }

}