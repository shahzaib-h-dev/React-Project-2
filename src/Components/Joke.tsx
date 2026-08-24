export function Joke(props:any) {
  return <>
  {props.setup && <p>Setup: {props.setup}</p>}
  <p>Punchline: {props.punchline}</p>
  <hr />
  </>
 }
