import './ignore'

import DefaultImport from '@components/DefaultImport.vue'

import BothScripts from '@/components/BothScripts.vue'
import JsTest from '@/components/JsTest.vue'
import JsxLangTest from '@/components/JsxLangTest.vue'
import JsxTest from '@/components/JsxTest.jsx'
import TsxLangTest from '@/components/TsxLangTest.vue'
import TsxTest from '@/components/TsxTest'
import TypeProps from '@/components/TypeProps.vue'
import NoScript from '@/components/NoScript.vue'
import OutsideProps from '@/components/outside-props'

export { default as App } from './App.vue'
export { default as Setup } from '@/components/Setup.vue'
export { Decorator } from './decorator'

export type { User } from './types'
export type { DtsType } from './dts-types'

export {
  BothScripts,
  JsTest,
  JsxLangTest,
  JsxTest,
  TsxLangTest,
  TsxTest,
  TypeProps,
  NoScript,
  OutsideProps
}

export default DefaultImport

export const dtsTypeTest: GlobalType = 1
