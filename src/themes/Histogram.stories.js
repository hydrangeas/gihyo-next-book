import { Button } from '@storybook/react/demo'
import React from 'react'

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

export default Button
