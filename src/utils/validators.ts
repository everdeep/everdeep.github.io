export const required = (value: any) => (value ? undefined : 'Required');

export const checkboxRequired = (props: any) => {
    console.log(props);
    return false;
};

export const mustBeNumber = (value: any) =>
    isNaN(value) ? 'Must be a number' : undefined;

export const minValue = (min: number) => (value: number) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
        validators.reduce(
            (error, validator) => error || validator(value),
            undefined,
        );
