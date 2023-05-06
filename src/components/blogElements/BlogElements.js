/* eslint-disable react/display-name */
import React from 'react'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import find from 'lodash/find'
import Text from './Text'
import HeadingBox from './Headings'
import List from './List'
import A from './A'
import Image from './Image'
import { Code, InLineCode } from './Code'
import Pre from './Pre'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length === 1 && find(node.content[0].marks, { type: 'code' })) {
        return (
          <Pre>
            <Code fullWidth>{node.content[0].value}</Code>
          </Pre>
        )
      }

      return <Text>{children}</Text>
    },
    [BLOCKS.HEADING_1]: (node, children) => <HeadingBox as="h1">{children}</HeadingBox>,
    [BLOCKS.HEADING_2]: (node, children) => <HeadingBox as="h2">{children}</HeadingBox>,
    [BLOCKS.HEADING_3]: (node, children) => <HeadingBox as="h3">{children}</HeadingBox>,
    [BLOCKS.HEADING_4]: (node, children) => <HeadingBox as="h4">{children}</HeadingBox>,
    [BLOCKS.HEADING_5]: (node, children) => <HeadingBox as="h5">{children}</HeadingBox>,
    [BLOCKS.HEADING_6]: (node, children) => <HeadingBox as="h6">{children}</HeadingBox>,
    [BLOCKS.OL_LIST]: (node, children) => <List>{children}</List>,
    [BLOCKS.UL_LIST]: (node, children) => <List as="ul">{children}</List>,
    [INLINES.HYPERLINK]: (node, children) => (
      <A target={node.data.uri.startsWith('#') ? '_self' : '_blank'} href={node.data.uri}>
        {children}
      </A>
    ),
    'embedded-asset-block': Image,
  },
  renderMark: {
    [MARKS.CODE]: text => {
      return <InLineCode>{text}</InLineCode>
    },
    [MARKS.BOLD]: text => <b>{text}</b>,
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
  },
}

export default options
