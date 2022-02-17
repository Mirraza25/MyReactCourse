//import ExpenseItem from "./components/ExpenseFiles/ExpenseItem";
import ExpenseList from "./components/ExpenseFiles/ExpenseList";
import NewExpense from "./components/NewExpensesComponent/NewExpense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <div><NewExpense/></div>
      
     {/* 
      <ExpenseItem title={props.items[0].title} dates={props.items[0].date} amount={props.items[0].amount}/>
      <ExpenseItem title={props.items[1].title} dates={props.items[1].date} amount={props.items[1].amount}/>
      <ExpenseItem title={props.items[2].title} dates={props.items[2].date} amount={props.items[2].amount}/>
      <ExpenseItem title={props.items[3].title} dates={props.items[3].date} amount={props.items[3].amount}/>
      */}
      <ExpenseList items={expenses}/>
    </div>
  );
}

export default App;
