import type { Meta, StoryObj } from '@storybook/react'

import { Character } from '../components'
import { TypedStatus } from '../types'

const meta = {
  title: 'Character',
  component: Character,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Character>

export default meta

type Story = StoryObj<typeof meta>

export const Missed: Story = {
  args: {
    char: 'M',
    highlighted: false,
    typedStatus: TypedStatus.MISS,
  },
}

export const Hit: Story = {
  args: {
    char: 'H',
    highlighted: false,
    typedStatus: TypedStatus.HIT,
  },
}

export const Space: Story = {
  args: {
    char: ' ',
    highlighted: false,
    typedStatus: TypedStatus.NONE,
  },
}
