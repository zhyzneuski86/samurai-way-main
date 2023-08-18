import React, {ChangeEvent, FC, FormEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {FieldConfig, FieldInputProps, useFormik} from "formik";
import Button from "@mui/material/Button";

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    const messageElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)
    //const newMessageBody = props.dialogPage.newMessageBody


    const formik = useFormik({
        initialValues: {
            newMessageBody: ''
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
                    <AddMessageForm handleSubmit={formik.handleSubmit} formikGetFieldProps={formik.getFieldProps}/>
                </div>
            </div>
        </div>
    );
};

type AddMessagePropsType = {
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
    formikGetFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>
}

const AddMessageForm: FC<AddMessagePropsType> = (props) => {

    return <form onSubmit={props.handleSubmit}>

        {/*<FormGroup>*/}
        <textarea
            {...props.formikGetFieldProps('newMessageBody')}
        />
        <div><Button type={'submit'} variant={'contained'} color={'primary'}>
            Send
        </Button></div>
        {/*<Button type={'submit'} variant={'contained'} color={'primary'}>*/}
        {/*    Send*/}
        {/*</Button>*/}
        {/*<button onClick={onSendMessageClick}>Send</button>*/}
        {/*</FormGroup>*/}
    </form>

}

export default Dialogs
