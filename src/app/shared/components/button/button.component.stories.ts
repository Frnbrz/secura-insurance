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
    disabled: false,
  },
  render: args => ({
    template: `<app-button disabled=${args.disabled}>Button</app-button>`,
  }),
}
