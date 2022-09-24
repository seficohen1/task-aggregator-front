import { useLocation } from "react-router-dom";
import TopMenu from "../../Components/TopMenu/TopMenu";

export default function TaskDetail() {
  const location = useLocation();
  const { assigned, id, date, status, title } = location.state;

  return (
    <div>
      <section>
        <h1>Task: {title}</h1>
        <p>Assigned to: {assigned}</p>
        <p>Assigned on: {date}</p>
        <p>Task id: {id}</p>
        <p>Task Status: {status}</p>
      </section>
    </div>
  );
}

export { TaskDetail };
