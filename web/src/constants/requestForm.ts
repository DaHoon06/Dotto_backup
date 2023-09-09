import { generateTimesCallback } from '@/lib/utils/generateTimesCallback'

export const SECONDS = 1000
export const MIN = SECONDS * 60
export const HALF_HOUR = MIN * 30
export const HOUR = MIN * 60

export const MORNING_REQUEST_TIMES = [...new Array(8)].map(
  generateTimesCallback(8)
)

export const AFTERNOON_REQUEST_TIMES = [...new Array(12)].map(
  generateTimesCallback(12)
)

export const ALL_REQUEST_TIMES = [...new Array(20)].map(
  generateTimesCallback(20)
)

export const TATTO_TYPE_LIST = [
  { type: '커버업 타투', value: 0 },
  { type: '새로운 타투', value: 1 },
] as const

export type TattoType = typeof TATTO_TYPE_LIST[number]

export const SKIN_DISEASE_TYPE_LIST = [
  { type: '없음', value: 0 },
  { type: '있음', value: 1 },
] as const

export type SkinDiseaseType = typeof SKIN_DISEASE_TYPE_LIST[number]
