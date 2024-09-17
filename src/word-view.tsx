import type { Word } from "./schemas"
import dictionaryObject from "@/data/dictionary.json"
import type { Dictionary } from "./schemas"
import { For } from "solid-js"

const dictionary: Dictionary = dictionaryObject

interface Props {
  word: string
}

export default function WordView(props: Props) {
  const word = dictionary[props.word]

  const audio = word.articulation
    ?.slice(-1)
    .map(
      (a) =>
        new Audio(
          new URL(`/src/assets/audio/${a.audioSrc}`, import.meta.url).href
        )
    )

  const click = () => audio![0].play()

  return (
    <div
      onClick={click}
      class="flex gap-x-2 m-auto flex-wrap justify-center items-center"
    >
      <div>{props.word}</div>

      <For each={word.articulation?.slice(-1)}>
        {(a, n) => {
          return <div>/{a.transcription}/</div>
        }}
      </For>

      <div></div>
    </div>
  )
}
