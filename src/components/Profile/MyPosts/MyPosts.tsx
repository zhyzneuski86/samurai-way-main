import React, {FC, FormEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import Button from "@mui/material/Button";
import {FieldConfig, FieldInputProps, useFormik} from "formik";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

        const formik = useFormik({
            initialValues: {
                newPostText: ''
            },
            onSubmit: values => {
                //props.sendMessage(values.newMessageBody)
                props.addPost(values.newPostText)
                formik.resetForm()
            },
        })

    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
            </div>
            <AddNewPostForm handleSubmit={formik.handleSubmit} formikGetFieldProps={formik.getFieldProps}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </>
    )
}


type AddNewPostFormPropsType = {
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
    formikGetFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>
}
const AddNewPostForm: FC<AddNewPostFormPropsType> = (props) => {

    return <form onSubmit={props.handleSubmit}>

        {/*<FormGroup>*/}
        <div>
            <div>
                <textarea
                    {...props.formikGetFieldProps('newPostText')}
                />
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
