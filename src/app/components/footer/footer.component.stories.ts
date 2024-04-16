import type { Meta, StoryObj } from '@storybook/angular'
import { FooterComponent } from './footer.component'

const meta: Meta<FooterComponent> = {
  title: 'Footer',
  component: FooterComponent,
}

export default meta
type Story = StoryObj<FooterComponent>

export const Default: Story = {
  args: {},
}
