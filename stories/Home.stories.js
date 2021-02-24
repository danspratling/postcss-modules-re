import React from 'react'

import Page from '../pages/index'

export default {
  title: 'Pages/Home',
  component: Page,
}

const Template = args => <Page {...args} />

export const Home = Template.bind({})
Home.args = {}
