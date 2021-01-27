import {addDecorator} from "@storybook/react";
import {ThemeProvider} from '@material-ui/core/styles';
import tdcTheme from "../src/theme/themes/tdc-erhverv";


addDecorator((story) => (
    <ThemeProvider theme={tdcTheme}>
            <div style={{maxWidth: "1000px", margin: "auto"}}>{story()}</div>
    </ThemeProvider>
))


export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}
