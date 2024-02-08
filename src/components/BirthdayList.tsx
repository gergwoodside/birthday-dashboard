interface Birthday {
  id: number;
  name: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  onDelete: (id: number) => void;
}

const BirthdayList = ({ birthdays, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Birthday</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {birthdays.map((birthday, index) => (
          <tr key={birthday.id}>
            <td>{birthday.id}</td>
            <td>{birthday.name}</td>
            <td>{birthday.date}</td>
            <td>
              <button
                onClick={() => onDelete(birthday.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BirthdayList;
