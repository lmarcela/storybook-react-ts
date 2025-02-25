import React from "react";
import Card from ".";
import { Meta, StoryFn } from '@storybook/react';
import { CardProps } from "./types";

export default {
    title: "Atoms/Card",
    component: Card,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['base', 'primary', 'secondary'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        isClickable: { control: 'boolean' },
        isDraggable: { control: 'boolean' },
    },
} as Meta;


const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is a card',
    color: 'base',
    size: 'sm',
    isClickable: false,
    isDraggable: false,
};

export const ClickableCard = Template.bind({});
ClickableCard.args = {
    children: 'This card is clickable',
    color: 'primary',
    size: 'md',
    isClickable: true,
    isDraggable: false,
};

export const DraggableCard = Template.bind({});
DraggableCard.args = {
    children: 'This card is draggable',
    color: 'secondary',
    size: 'lg',
    isClickable: false,
    isDraggable: true,
};
