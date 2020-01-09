/* eslint-disable react/display-name */
import React from 'react'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Text from './Text'
import HeadingBox from './Headings'
import List from './List'
import A from './A'
import Image from './Image'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <HeadingBox as="h1">{children}</HeadingBox>,
    [BLOCKS.HEADING_2]: (node, children) => <HeadingBox as="h2">{children}</HeadingBox>,
    [BLOCKS.HEADING_3]: (node, children) => <HeadingBox as="h3">{children}</HeadingBox>,
    [BLOCKS.HEADING_4]: (node, children) => <HeadingBox as="h4">{children}</HeadingBox>,
    [BLOCKS.HEADING_5]: (node, children) => <HeadingBox as="h5">{children}</HeadingBox>,
    [BLOCKS.HEADING_6]: (node, children) => <HeadingBox as="h6">{children}</HeadingBox>,
    [BLOCKS.OL_LIST]: (node, children) => <List>{children}</List>,
    [BLOCKS.UL_LIST]: (node, children) => <List as="ul">{children}</List>,
    [INLINES.HYPERLINK]: (node, children) => (
      <A target="_blank" href={node.data.uri}>
        {children}
      </A>
    ),
    'embedded-asset-block': Image,
  },
}

export default options
