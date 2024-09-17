import storage from "@/data/dictionary.json"
import { For } from "solid-js"
import Block from "./block"
import wordStructure from "./word-structure"

export default function App() {
  const audio = new Audio("public/audio/am-uk.ogg")
  console.log(audio)
  return (
    <>
      <main class="container m-auto p-2 flex gap-2 flex-col">
        <For each={wordStructure}>
          {(item, index) => <Block block={item} />}
        </For>
      </main>
    </>
  )
}
