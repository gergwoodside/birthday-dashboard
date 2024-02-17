import moment from "moment";

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
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {birthdays.map((birthday) => (
            <tr key={birthday.id}>
              <td>{birthday.name}</td>
              <td>{moment(birthday.date).format("L")}</td>
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
    </div>
  );
};

export default BirthdayList;
