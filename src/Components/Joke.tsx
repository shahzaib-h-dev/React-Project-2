export function Joke(props:any) {
  return <>
  {props.setup && <p>Setup: {props.setup}</p>}
  <p>Puncline: {props.punchline}</p>
  <hr />
  </>
 }
