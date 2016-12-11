import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

	static contextTypes = {
		router: PropTypes.object
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
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// const title = this.props.fields.title
		// const handleSubmit = this.props.handleSubmit

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<h3>Create A New Post</h3>
				
				<div className={this.getFormGroupClass(title)} >
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="form-control-feedback">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={this.getFormGroupClass(categories)} >
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="form-control-feedback">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={this.getFormGroupClass(content)} >
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="form-control-feedback">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>

			</form>
		)
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a username';
	}
	if (!values.categories) {
		errors.categories = 'Enter categories';
	}
	if (!values.content) {
		errors.content = 'Enter content';
	}

	return errors;
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);
