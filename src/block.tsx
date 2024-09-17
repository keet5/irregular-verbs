import { For } from "solid-js"
import type { WordBlock } from "./schemas"
import WordView from "./word-view"
import style from "./block.module.css"

interface Props {
  block: WordBlock
}

export default function Block(props: Props) {
  return (
    <div class={`card`}>
      <div class="card-title">{props.block.principle}</div>
      {/* <div class="card-body grid grid-cols-3 gap-x-2 "> */}
      <table>
        <For each={props.block.wordList}>
          {(wordForms) => (
            <tr class={style.tr}>
              <For each={wordForms}>
                {(word) => (
                  <td>
                    <WordView word={word} />
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </table>
      {/* </div> */}
    </div>
  )
}
