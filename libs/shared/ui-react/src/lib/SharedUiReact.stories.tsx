import { Story, Meta } from '@storybook/react';
import { SharedUiReact, SharedUiReactProps } from './SharedUiReact';

export default {
  component: SharedUiReact,
  title: 'SharedUiReact',
} as Meta;

const Template: Story<SharedUiReactProps> = (args) => (
  <SharedUiReact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
