import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
	title: {
		type: 'input',
		label: 'Title for Post',
	}, 
	categories: {
		type: 'input',
		label: 'Enter some categories for this post',
	},
	content: {
		type: 'input',
		label: 'Type the content',
	}
};

class PostsNew extends Component {

	static contextTypes = {
		router: PropTypes.object
	}

	renderField(fieldConfig, field) {

		const fieldHelper = this.props.fields[field];

		return (
			<div className={this.getFormGroupClass(fieldHelper)} >
				<label>{fieldConfig.label}</label>
				<fieldConfig.type type="text" className="form-control" {...fieldHelper} />
				<div className="form-control-feedback">
					{fieldHelper.touched ? fieldHelper.error : ''}
				</div>
			</div>
		);
	}

	getFormGroupClass(field) {
		return `form-group ${field.touched && field.invalid ? 'has-danger': ''}`;
	}

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
		        // blog post has been created, navigate the user to the index
		        // We navigate by calling this.context.router.push with the
		        // new path to navigate to.
		        this.context.router.push('/');
	    	});
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<h3>Create A New Post</h3>
				
				{ _.map(FIELDS, this.renderField.bind(this)) }

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>

			</form>
		)
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, (obj, field) => {
		if (!values[field]) {
			errors[field] = `Enter a ${field}`;
		}
	});

	return errors;
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNewForm',
	fields: _.keys(FIELDS),
	validate
}, null, { createPost })(PostsNew);
