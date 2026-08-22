import { PropJoke } from "./PropJoke";

export function PropPractice() {
  return <>
    <main>
      <PropJoke
      
      punchline="Punchline number 1"
      upvotes={10}
      isPun={true}
      comments={[
        { author: "", text: "", title: ""}
      ]}
      />
      <PropJoke
      
      setup="Joke number 2"
      punchline="Punchline number 2"
      isPun={true}
      />
      <PropJoke
      
      setup="Joke number 3"
      punchline="Punchline number 3"
      isPun={true}
      />
      <PropJoke
      
      setup="Joke number 4"
      punchline="Punchline number 4"
      isPun={false}
      />

    
    </main>
  </>
 }
