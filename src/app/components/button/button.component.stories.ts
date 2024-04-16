import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from './button.component'

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
}

export default meta
type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
  args: {
    type: 'primary',
  },
}

export const Outline: Story = {
  args: {
    type: 'outline',
  },
}
