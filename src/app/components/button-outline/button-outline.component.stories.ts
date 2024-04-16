import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonOutlineComponent } from './button-outline.component'

const meta: Meta<ButtonOutlineComponent> = {
  title: 'Button',
  component: ButtonOutlineComponent,
}

export default meta
type Story = StoryObj<ButtonOutlineComponent>

export const Outline: Story = {
  args: {
    disabled: false,
  },
  render: args => ({
    template: `<app-button-outline disabled=${args.disabled}>Button</app-button-outline>`,
  }),
}
