import { Text as RNText, TextProps as RNTextProps } from 'react-native'

interface TextProps extends RNTextProps {
  variant: 'label' | 'base' | 'title' | 'headline' | 'stats'
}

export const Text = (props: TextProps) => {

  const variants = {
    label: "text-xs font-700 font-inter",
    base: "text-base font-400 font-inter",
    title: "text-xl font-700 font-inter",
    headline: "text-2xl font-700 font-inter",
    stats: "text-xs font-400 font-mono",
  }

  return (
    <RNText className={variants[props.variant] || variants.base} {...props}>
      {props.children}
    </RNText>
  )
}