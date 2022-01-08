import React from 'react'

import ExampleButton from './ExampleButton'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: ExampleButton,
  title: 'Components/Atoms/ExampleButton',
}
const Template = (args) => <ExampleButton {...args} />

export const Default = Template.bind({})
Default.args = {}
