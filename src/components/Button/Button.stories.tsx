// Button.stories.js | Button.stories.jsx

import Button from './index';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["primary", "secondary"]
            }
        }
    }
};

export const Primary = () => <Button variant="primary">Primary</Button>;

Primary.storyName = 'I am the primary';