function Card(props){
    return (
        <div className="card" onClick={props.onClick} key={props.name}>
            <img src={"https://flagsapi.com/"+props.code+"/flat/64.png"}/>
            <div>{props.name}</div>
        </div>
    )    
}

export default Card;