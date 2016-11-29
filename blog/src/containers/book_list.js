import React, {Component} from 'React';

export default class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item" 
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4" >
				{this.renderList()}
			</ul>
		)
	}
}