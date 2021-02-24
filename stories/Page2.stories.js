import React from 'react'

import Page from '../pages/page2'

export default {
  title: 'Pages/Page2',
  component: Page,
}

const Template = args => <Page {...args} />

export const Page2 = Template.bind({})
Page2.args = {}
