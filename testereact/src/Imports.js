import React from "react";

export class Imports extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    componentDidMount(){
        console.log('conectando ao Banco de Dados...');
        setInterval(
            () => {this.atualizar();} 
            ,2000
        );
    }

    atualizar(){
        this.setState(
            {
                ano:this.state.ano + 1
            }
        );
    }

    componentWillUnmount(){
        console.log('desconectando ao Banco de Dados...');
    }

    render(){
        return(
            <footer>
                <p>Copyright {this.state.ano}</p>
            </footer>
        );
    }
}


export function Header(){
    return(
        <footer>
            <p>Header</p>
        </footer>
    )
}
export function Left(){
    return(
        <footer>
            <p>Left</p>
        </footer>
    )
}
export function Right(){
    return(
        <footer>
            <p>Right</p>
        </footer>
    )
}
export function Side(){
    return(
        <footer>
            <p>Side</p>
        </footer>
    )
}