/*
<style>
	font-size: 25px;
</style>

<div id='container'></div>

*/


/* React: introduction */

function ListItem (props) {
	return (
		<li>
			{props.item}
		</li>
	);
}

class ShoppingList extends React.Component {
	constructor() {
		super();
		this.state = {
			list: ['Bread', 'Butter', 'Water']
		};
	}
	render() {
		var listItems = [];
		this.state.list.forEach( (currVal, i) => {
			listItems.push(<ListItem item={currVal} />);
		});
		
		return (
			<div className='shopping-list'>
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					{listItems}
				</ul>
			</div>

		);
	}
}

ReactDOM.render(
	<ShoppingList name='Charlie' />,
	document.getElementById('container')
);

