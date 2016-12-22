import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	})

});