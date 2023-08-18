import React, {FC, FormEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import Button from "@mui/material/Button";
import {FieldConfig, FieldInputProps, FormikErrors, FormikTouched, useFormik} from "formik";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    type FormikErrorType = {
        newPostText?: string
    }

    const formik = useFormik({
            initialValues: {
                newPostText: ''
            },
            validate: (values) => {
                const errors: FormikErrorType = {}
                if (!values.newPostText) {
                    errors.newPostText = 'Required'
                } else if (values.newPostText.length > 30) {
                    errors.newPostText = 'Must be less then 30 symbols'
                }
                return errors
            },
            onSubmit: values => {
                props.addPost(values.newPostText)
                formik.resetForm()
            },
        })

    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
            </div>
            <AddNewPostForm handleSubmit={formik.handleSubmit} formikGetFieldProps={formik.getFieldProps}
                            errors={formik.errors} touched={formik.touched}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </>
    )
}


type AddNewPostFormPropsType = {
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
    formikGetFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>
    errors: FormikErrors<{newPostText: string}>
    touched: FormikTouched<{newPostText: string}>
}
const AddNewPostForm: FC<AddNewPostFormPropsType> = (props) => {


    return <form onSubmit={props.handleSubmit}>

        {/*<FormGroup>*/}
        <div>
            <div>
                <textarea
                    {...props.formikGetFieldProps('newPostText')}
                />
                {props.touched.newPostText && props.errors.newPostText &&
                    <div style={{color: 'red'}}>{props.errors.newPostText}</div>}
            </div>
            <div>
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Add post
                </Button>
            </div>
        </div>
        {/*</FormGroup>*/}
    </form>

}
export default MyPosts;
