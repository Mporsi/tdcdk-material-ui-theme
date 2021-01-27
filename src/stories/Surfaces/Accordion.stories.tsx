import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Accordion, { AccordionProps } from '@material-ui/core/Accordion';
import AccordionSummary, { AccordionSummaryProps } from '@material-ui/core/AccordionSummary';
import AccordionDetails, { AccordionDetailsProps } from '@material-ui/core/AccordionDetails';

export default {
    title: 'Surfaces/Accordion',
    argTypes: {},
} as Meta;

const lipsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

interface IStoryProps {
    AccordionProps: AccordionProps;
    AccordionSummaryProps: AccordionSummaryProps;
    AccordionDetailsProps: AccordionDetailsProps;
}

const AccordionTemplate: Story<IStoryProps> = (args) => (
    <>
        <Accordion {...args.AccordionProps}>
            <AccordionSummary {...args.AccordionSummaryProps}>Summary 1</AccordionSummary>
            <AccordionDetails {...args.AccordionDetailsProps}>{lipsum}</AccordionDetails>
        </Accordion>
        <Accordion {...args.AccordionProps}>
            <AccordionSummary {...args.AccordionSummaryProps}>Summary 2</AccordionSummary>
            <AccordionDetails {...args.AccordionDetailsProps}>{lipsum}</AccordionDetails>
        </Accordion>
        <Accordion {...args.AccordionProps}>
            <AccordionSummary {...args.AccordionSummaryProps}>Summary 3</AccordionSummary>
            <AccordionDetails {...args.AccordionDetailsProps}>{lipsum}</AccordionDetails>
        </Accordion>
    </>
);

export const SampleAccordion = AccordionTemplate.bind({});

SampleAccordion.args = {};
