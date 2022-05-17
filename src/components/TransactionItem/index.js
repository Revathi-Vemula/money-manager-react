import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTransaction = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          testid="delete"
          onClick={deleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
