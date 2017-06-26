/*
<style>
	font-size: 25px;
</style>

<div id='container'></div>

*/


/* React: introduction ,  2017-Jun-25 */

function ListItem (props) {
	return (
		<li onClick={props.onClick}>
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

	onClick(index) {
		var newList = this.state.list.slice();
		newList.splice(index, 1);
		this.setState({list: newList});
	}
	
	render() {
		var listItems = [];
		this.state.list.forEach( (currVal, i) => {
			listItems.push(<ListItem item={currVal} onClick={() => this.onClick(i)} />);
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

