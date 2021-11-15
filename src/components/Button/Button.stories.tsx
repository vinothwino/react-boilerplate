// Button.stories.js | Button.stories.jsx

import { Button } from './Button';

const Template = (args) => <Button {...args} />;

interface ThemeButtonProps {
    [key: string]: any;
}

//👇 Each story then reuses that template
export const ThemeButton: ThemeButtonProps = Template.bind({});
ThemeButton.args = { variant: 'primary', children: 'Primary' };


export default {
    component: Button,
    title: 'components/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'select' }
        },
        size: {
            options: ['lg', 'md', 'sm'],
            control: { type: 'radio' }
        }
    }
}

