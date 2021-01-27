import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper, { StepperProps } from '@material-ui/core/Stepper';
import Step, { StepProps } from '@material-ui/core/Step';
import StepLabel, { StepLabelProps } from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper(props: StepperProps): ReactElement {
    const { activeStep } = props;
    const classes = useStyles();
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper {...props}>
                {steps.map((label, index) => {
                    const stepProps: StepProps = {};
                    const labelProps: StepLabelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            {activeStep == index && (
                                <div>
                                    <div>
                                        <Typography className={classes.instructions}>
                                            {getStepContent(index)}
                                        </Typography>
                                    </div>
                                </div>
                            )}
                        </Step>
                    );
                })}
                {activeStep === steps.length && (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </div>
                )}
            </Stepper>
        </div>
    );
}
