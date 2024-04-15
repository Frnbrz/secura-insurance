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
    className: 'primary',
    type: 'primary',
  },
}

export const Outline: Story = {
  args: {
    className: 'outline',
    type: 'outline',
  },
}
