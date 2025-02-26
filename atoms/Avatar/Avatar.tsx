import React from 'react'

import styles from './Avatar.module.css'
import withStyles from '../../hocs/withStyles'
import { mapSize } from './helpers'
import Picture from '../Picture'
import { AvatarProps } from './types'

const Avatar = ({
  src, size='md', getStyles
}: AvatarProps) => (
  <div className={getStyles('avatar')}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
        withBorder
      />
    </div>
)

export default withStyles(styles)(Avatar)