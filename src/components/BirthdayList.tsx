import { useState } from "react";
import moment from "moment";

interface Birthday {
  id: string;
  personName: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  onDelete: (id: string) => void;
  onSave: (id: string, newData: Partial<Birthday>) => void;
}

const BirthdayList = ({ birthdays, onDelete, onSave }: Props) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleEdit = (id: string, name: string, date: string) => {
    setEditingId(id);
    setEditedName(name);
    setEditedDate(date);
  };

  const handleSave = (id: string) => {
    onSave(id, { personName: editedName, date: editedDate });
    setEditingId(null);
  };

  return (
    <div>
      <table className="table table-bordered table-container">
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
              <td>
                {editingId === birthday.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  birthday.personName
                )}
              </td>
              <td>
                {editingId === birthday.id ? (
                  <>
                    <input
                      type="date"
                      value={editedDate}
                      onChange={(e) => setEditedDate(e.target.value)}
                    />
                    <button
                      onClick={() => handleSave(birthday.id)}
                      className="btn btn-success mx-3"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  moment(birthday.date).format("L")
                )}
              </td>
              <td>
                <button
                  onClick={() => onDelete(birthday.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                {editingId !== birthday.id && (
                  <button
                    onClick={() =>
                      handleEdit(
                        birthday.id,
                        birthday.personName,
                        birthday.date
                      )
                    }
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayList;
