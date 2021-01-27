import React, { ReactElement } from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        float: 'right',
    },
});

interface ICharacterCountProps {
    count: number;
    maximum: number;
    setError: (value: boolean) => void;
}

function CharacterCount(props: ICharacterCountProps): ReactElement {
    const { count, maximum, setError } = props;
    const classes = useStyles();
    setError(count > maximum);
    return (
        <span className={classes.root}>
            {count}/{maximum}
        </span>
    );
}

export default CharacterCount;
