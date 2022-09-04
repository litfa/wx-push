import KeChrngBiao from '../types/KeChengBiao'
import type { Config } from '../types/Config'
import { readFileSync } from 'fs'
import { parse } from 'yaml'

export default parse(readFileSync('./config/config.yml', 'utf8')) as Config

export const keChengBiao = () => {
  return parse(readFileSync('./config/kcb.yml', 'utf8')) as KeChrngBiao[][]
}