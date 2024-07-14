export default function Item(props) {
  const { data, deleteStudent } = props;
  return (
    <>
      <li key={data.id}>
        <h1>
          {data.id} - {data.name}
        </h1>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          Delete
        </button>
      </li>
    </>
  );
}
