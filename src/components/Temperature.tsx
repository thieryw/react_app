import React from "react";

const BoilingVerdict: React.FunctionComponent<{temp: number; units: MeasurementUnits}> = ({temp, units})=>{

    if(!temp){
        return <div></div>
    }

    if((units === "celsius" && temp >= 100) || (units === "fahrenheit" && temp >= 212)){
        return <p>water will boil</p>
    }

    return <p>water will not boil</p>

}

type MeasurementUnits = "celsius" | "fahrenheit";

type Props = {
    units: MeasurementUnits;
    temp: number;
    onTempChange: Function;
}

function toCelsius(temp: number): number{
    return (temp - 32) / (9 / 5);
}

function toFahrenheit(temp: number): number{
    return temp * 9 / 5 + 32;
}


class TemperatureInput extends React.Component<Props>{


    private handleChange = (e: any)=>{
        this.props.onTempChange(e.target.value);

    }


    render(){
        return (
            <fieldset>
                <legend>Enter temperature in {this.props.units}:</legend>
                <input type="number" value={this.props.temp} onChange={this.handleChange}/>
            </fieldset>
        )
    }

}





export class Calculator extends React.Component<{},{temp: number, units: MeasurementUnits}>{
    constructor(props: {}){
        super(props);
        this.state = {
            "temp": 0,
            "units": "celsius"
        }

    }

    private onTempChangeC = (e: number)=>{

        this.setState({
            "temp": e,
            "units": "celsius"
        })


    }

    private onTempChangeF = (e: number)=>{
        this.setState({
            "temp": e,
            "units": "fahrenheit"
        })

    }

    render(){
        const temp = this.state.temp;
        const celsius = this.state.units === "celsius" ? temp : toCelsius(temp);
        const fahrenheit = this.state.units === "fahrenheit" ? temp : toFahrenheit(temp);

        return(

            <div>
                <TemperatureInput units="celsius" temp={celsius} onTempChange={this.onTempChangeC}/>
                <TemperatureInput units="fahrenheit" temp={fahrenheit} onTempChange={this.onTempChangeF}/>
                <BoilingVerdict temp={this.state.units === "celsius" ? celsius : fahrenheit} units={this.state.units}/>
            </div>
        )
    }

}



