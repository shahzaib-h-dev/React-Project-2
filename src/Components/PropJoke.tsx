
export function PropJoke(props: any) {
  console.log(!props.comments)
  return <>
    
    <p>{props.setup}</p>
    <p>{props.punchline}</p>
    <hr />
  </>
 }
