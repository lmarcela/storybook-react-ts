import Avatar, { styles } from '.'
import { Meta, StoryFn } from '@storybook/react';
import { getListTemplate, getOptionsArgTypes, getTemplate } from "../../helpers/storybook";
import { AvatarProps, Sizes as Sizestype } from './types';

const Template: StoryFn<AvatarProps> = getTemplate(Avatar, styles)
const ListTemplate = getListTemplate(Avatar, styles)
const sizeOptions: Sizestype[] = ['sm', 'md', 'lg'] as const;

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    args: {
        src: 'https://picsum.photos/id/1027/200/200',
      },
      argTypes: {
        size: getOptionsArgTypes(sizeOptions),
      },
      parameters: { __sb: { fd: 'row' } },
} as Meta;

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = {
  items: sizeOptions.map((size) => ({ size })),
}