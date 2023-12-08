import { BeautifulTree } from '../BeautifulTree'
import type { Meta, StoryObj } from '@storybook/react'

// To learn more about this, check the official Storybook documentation.
const meta = {
  title: 'BeautifulTree',
  component: BeautifulTree,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BeautifulTree>

export default meta

type Story = StoryObj<typeof BeautifulTree>

export const MyFirstStory: Story = {
  args: {
    id: 'my-first-story',
    width: 200,
    height: 200,
  },
}