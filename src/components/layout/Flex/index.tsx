/* eslint-disable prettier/prettier */
import styled from "styled-components"
import type {
  Responsive,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf
} from '../../../types/styles'
import { toPropValue } from "../../../utils/styles"
import Box, { BoxProps } from "../Box"

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>
  alignContent?: Responsive<CSSPropertyAlignContent>
  justifyContent?: Responsive<CSSPropertyJustifyContent>
  justifyItems?: Responsive<CSSPropertyJustifyItems>
  flexWrap?: Responsive<CSSPropertyFlexWrap>
  flexBasis?: Responsive<string>
  flexDirection?: Responsive<CSSPropertyFlexDirection>
  flexGrow?: Responsive<string>
  flexShrink?: Responsive<string>
  justifySelf?: Responsive<CSSPropertyJustifySelf>
  alignSelf?: Responsive<CSSPropertyAlignSelf>
  order?: Responsive<string>
}

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = styled(Box)<FlexProps>`
  ${(props) => toPropValue('align-items', props.alignItems, props.theme)}
  ${(props) => toPropValue('alignContent', props.alignContent, props.theme)}
  ${(props) => toPropValue('justifyContent', props.justifyContent , props.theme)}
  ${(props) => toPropValue('justifyItems', props.justifyItems, props.theme)}
  ${(props) => toPropValue('flexWrap', props.flexWrap, props.theme)}
  ${(props) => toPropValue('flexBasis', props.flexBasis, props.theme)}
  ${(props) => toPropValue('flexDirection', props.flexDirection, props.theme)}
  ${(props) => toPropValue('flexGrow', props.flexGrow, props.theme)}
  ${(props) => toPropValue('flexShrink', props.flexShrink, props.theme)}
  ${(props) => toPropValue('justifySelf', props.justifySelf, props.theme)}
  ${(props) => toPropValue('alignSelf', props.alignSelf, props.theme)}
  ${(props) => toPropValue('order', props.order, props.theme)}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex