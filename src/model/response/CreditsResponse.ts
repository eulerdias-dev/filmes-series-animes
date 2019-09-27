/* eslint-disable camelcase */
export interface CreditsResponse{
  id: number
  cast: Cast[]
  crew: Crew[]
}

export interface Cast{
  cast_id: number
  character: string
  credit_id: string
  gender: number|null
  id: number
  name: string
  order: number
  profile_path: string|null
}

export interface Crew{
  credit_id: string
  department: string
  gender: number|null
  id: number
  job: string
  name: string
  profile_path: string|null
}
