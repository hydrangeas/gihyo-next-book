/**
 * Responsiveプロパティ
 * CSSプロパティの値をブレークポイントごとに設定できる
 * TはCSSプロパティの値の型
 */
export type ResponsiveProp<T> = {
  base?: T //デフォルト
  sm?: T // 640px以上
  md?: T // 768px以上
  lg?: T // 1024px以上
  xl?: T // 1280px以上
}
export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  // コードの自動補完
  | (string & Record<never, never>)

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'cednter'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | (string & Record<never, never>)

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & Record<never, never>)

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & Record<never, never>)

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & Record<never, never>)

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & Record<never, never>)

/**
 * Grid
 */
type GridLine = 'auto' | (string & Record<never, never>)

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & Record<never, never>)

export type CSSPropertyGridRow =
  | CSSPropertyGlobals
  | GridLine
  | (string & Record<never, never>)

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & Record<never, never>)

export type CSSPropertyGridArea =
  | CSSPropertyGlobals
  | GridLine
  | (string & Record<never, never>)
