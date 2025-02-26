import React from 'react'

import styles from './Picture.module.css'
import withStyles from '../../hocs/withStyles'
import { PictureProps } from './types'

const Picture = ({
  getStyles,
  src,
  width,
  height = 'auto',
  isRounded,
  withBorder = false,
}: PictureProps) => (
  <picture
    className={getStyles('picture', {
      'is-rounded': isRounded,
      'with-border': withBorder,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} />
  </picture>
)

export default withStyles(styles)(Picture)