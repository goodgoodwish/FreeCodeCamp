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

  addItem() {
		var item = document.getElementById('listItem').value;
		document.getElementById('listItem').value = '';
		var newList = this.state.list.slice();
    newList.push(item);
		this.setState({list: newList});
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
				<input type='text' id='listItem' placeholder='Add item'/>
				<button type='button' onClick-{() => this.addItem()}>Add</button>
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


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Juliet" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

