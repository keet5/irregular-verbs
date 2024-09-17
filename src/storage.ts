import { $ } from "bun"

interface WordInformation {
  word: string
  articulation?: {
    country: string
    transcription?: string
    audioSrc?: string
  }[]
  definition?: string
}

main()

class Storage {
  file: { [key: string]: WordInformation } = {}
  constructor(public storagePath: string) {}

  async open() {
    const file = await Bun.file(this.storagePath).json()

    if (typeof file == "object") {
      this.file = file
    }
  }

  async save() {
    await Bun.write(this.storagePath, JSON.stringify(this.file))
  }

  add(word: WordInformation) {
    this.file[word.word] = word
  }

  has(word: string) {
    return this.file[word] != null
  }

  printWrongWords() {
    Object.entries(this.file)
      .filter(([key, value]) => {
        return value.definition == null || value.articulation == null
      })
      .forEach(([key, value]) => {
        console.log(key)
      })
  }

  changePath() {
    Object.entries(this.file).forEach(([key, value]) => {
      value.articulation?.forEach((a, n) => {
        this.file[key].articulation![n].audioSrc = a.audioSrc?.replace(
          "public/audio/",
          ""
        )
      })
    })
  }

  printWord() {
    Object.values(this.file).forEach((i) => {
      console.log(i.articulation?.map((i) => i.audioSrc))
    })
  }
}

async function main() {
  const s = new Storage("./src/data/dictionary.json")
  await s.open()
  // s.changePath()
  s.printWord()
  // await s.save()
}
