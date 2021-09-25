import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction, transactions } = useContext(GlobalContext);
	const submitForm = (e) => {
		e.preventDefault();
		if (text && amount) {
			let transaction = {
				id: transactions.length + 1,
				text,
				amount: Number(amount),
			};

			addTransaction(transaction);
			setText('');
			setAmount('');
		}
	}

	return (
		<div>
			 <h3>Add new transaction</h3>
			<form onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
					<input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
					<label htmlFor="amount">
						Amount <br />
            (negative - expense, positive - income)</label>
					<input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
		</div>
	)
}

export default AddTransaction
