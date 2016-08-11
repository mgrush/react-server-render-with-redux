import React from "react";

if( process.env.BROWSER ){
	require("./index.less");
}

if (typeof require.ensure !== 'function'){
	require.ensure = (d, c) => c(require);
}

class BookItem extends React.Component {
	render(){
		return (
			<div className="m-book-content">
				你选中了书籍《{this.props.params.bookName}》
			</div>		
		);
	}
}

export default {
	path : ":bookName",
	component : BookItem
}
