export interface Word {
  word: string
  articulation?: Articulation[]
  definition?: string
}

export interface Articulation {
  country: string
  transcription: string
  audioSrc: string
}

export type Dictionary = { [key: string]: Word }

export interface WordBlock {
  principle: string
  wordList: string[][]
}
