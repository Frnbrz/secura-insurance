import type { Meta, StoryObj } from '@storybook/angular'
import { NavbarComponent } from './navbar.component'

const meta: Meta<NavbarComponent> = {
  title: 'Navbar',
  component: NavbarComponent,
}

export default meta
type Story = StoryObj<NavbarComponent>

export const Default: Story = {
  args: {},
}
