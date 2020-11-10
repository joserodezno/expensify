import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test ('Should return 0 if no expense', () => {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);
});

test ('sohuld add up a single expense', () => {
    const res = selectExpenseTotal([expenses[0]]);
    expect(res).toBe(195);
});

test ('sohuld add up all expense', () => {
    const res = selectExpenseTotal(expenses);
    expect(res).toBe(114195);
});

