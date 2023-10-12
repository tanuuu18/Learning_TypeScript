type GreetProps = {
name:string
}

function Greet(props :GreetProps) {
  return (
    <div>
        <h2>Greet {props.name}</h2>
    </div>
  )
}

export default Greet