import type { Meta, StoryObj } from '@storybook/angular'
import { InputComponent } from './input.component'

const meta: Meta<InputComponent> = {
  title: 'Input',
  component: InputComponent,
}

export default meta
type Story = StoryObj<InputComponent>

export const Default: Story = {
  args: {},
}
