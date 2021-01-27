import React, { ReactElement } from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import Error_filled from '@tdcerhverv/parrotfish/dist/icons/Icons/Error_filled.svg';
import { makeStyles } from '@material-ui/core';
import { rem } from './theme/utils/styling-tools';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: '0.5rem',
        height: rem(16),
        width: rem(16),
        verticalAlign: 'text-bottom',
        fill: theme.palette.error.main,
    },
}));
function ErrorMessage(): ReactElement {
    const classes = useStyles();
    return (
        <>
            <SvgIcon className={classes.root}>
                <Error_filled />
            </SvgIcon>
            This is the ErrorText Componenent
        </>
    );
}

export default ErrorMessage;
