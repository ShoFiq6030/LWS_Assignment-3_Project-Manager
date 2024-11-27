/* eslint-disable react/prop-types */

import Done from "./Done";
import OnProgress from "./OnProgress";
import Revise from "./Revise";
import AddSVG from "./Svg/AddSVG";
import ToDo from "./ToDo";


export default function Project({ filteredTasks, onEdit,onAddClick,onDelete}) {
  // let todoData = [];
  // let onProgressData = [];
  // let doneData = [];
  // let reviseData = [];

  // filteredTasks.map((item) => {
  //   if (item.category == "todo") {
  //     todoData.push(item);
  //   }
  //   if (item.category == "inprogress") {
  //     onProgressData.push(item);
  //   }
  //   if (item.category == "done") {
  //     doneData.push(item);
  //   }
  //   if (item.category == "revised") {
  //     reviseData.push(item);
  //   }
  // });
  // console.log(todoData);
  // console.log(onProgressData);
  // console.log(doneData);
  // console.log(reviseData);

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              onClick={onAddClick}
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            >
              <AddSVG />
              Add
            </button>
          </div>
        </div>
        <div className="-mx-2 mb-6 flex flex-wrap">
          <ToDo filteredTasks={filteredTasks} onEdit={onEdit} onDelete={onDelete} />
          <OnProgress filteredTasks={filteredTasks} onEdit={onEdit} onDelete={onDelete}/>
          <Done filteredTasks={filteredTasks} onEdit={onEdit} onDelete={onDelete} />
          <Revise filteredTasks={filteredTasks} onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </>
  );
}
