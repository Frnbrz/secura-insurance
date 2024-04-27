import type { Meta, StoryObj } from '@storybook/angular'
import { CheckboxComponent } from './checkbox.component'

const meta: Meta<CheckboxComponent> = {
  title: 'Checkbox',
  component: CheckboxComponent,
}

export default meta
type Story = StoryObj<CheckboxComponent>

export const Outline: Story = {
  args: {},
}
