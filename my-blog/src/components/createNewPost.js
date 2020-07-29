import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createPost} from "../actions";
import {Link} from "react-router-dom";

class CreateNewPost extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="body"
                    label="Body"
                    component={this.renderField}
                />
                <Field
                    name="comment"
                    label="Comment"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.body) {
        errors.body = "Enter some content";
    }
    if (!values.comment) {
        errors.comment = "Enter some comment please";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, {createPost})(CreateNewPost));