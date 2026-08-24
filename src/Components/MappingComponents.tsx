import JokesData  from "./JokesData";
import { Joke } from "./Joke"

export function MappingComponents() {
  const jokeElements = JokesData.map((joke) =>{
    return <Joke  setup={joke.setup} punchline={joke.punchline} />
  })
  return <>
  <main>
    {jokeElements}
  </main>
  </>
 }

 