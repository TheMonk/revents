import React from "react";
import { FormField, Select } from "semantic-ui-react";
import { useField } from 'formik';

export default function MySelectInput({label, ...props}) {
    const [field, meta, helpers] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <Select 
                clearable
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error ? (
                <label color='red'>{meta.error}</label>
            ) : null}
        </FormField>
    )
}