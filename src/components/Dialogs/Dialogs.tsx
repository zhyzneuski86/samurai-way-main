import React, { FC, FormEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {FieldConfig, FieldInputProps, FormikErrors, FormikTouched, useFormik} from "formik";
import Button from "@mui/material/Button";

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    const messageElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)
    //const newMessageBody = props.dialogPage.newMessageBody

    type FormikErrorType = {
        newMessageBody?: string
    }
    const formik = useFormik({
        initialValues: {
            newMessageBody: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.newMessageBody) {
                errors.newMessageBody = 'Required'
            } else if (values.newMessageBody.length > 50) {
                errors.newMessageBody = 'Must be less then 50 symbols'
            }
            return errors
        },
        onSubmit: values => {
            props.sendMessage(values.newMessageBody)
            formik.resetForm()
        },
    })


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <AddMessageForm handleSubmit={formik.handleSubmit} formikGetFieldProps={formik.getFieldProps}
                                    errors={formik.errors} touched={formik.touched} />
                </div>
            </div>
        </div>
    );
};

type AddMessagePropsType = {
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
    formikGetFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>
    errors: FormikErrors<{newMessageBody: string}>
    touched: FormikTouched<{newMessageBody: string}>
}

const AddMessageForm: FC<AddMessagePropsType> = (props) => {

    return <form onSubmit={props.handleSubmit}>

        <textarea
            {...props.formikGetFieldProps('newMessageBody')}
        />
        {props.touched.newMessageBody && props.errors.newMessageBody &&
            <div style={{color: 'red'}}>{props.errors.newMessageBody}</div>}
        <div><Button type={'submit'} variant={'contained'} color={'primary'}>
            Send
        </Button></div>

    </form>

}

export default Dialogs
