import React,{useContext} from "react";
import { DataContext } from "../context/Context";
import { RxCross1 } from "react-icons/rx";
const ProblemForm = () => {
    const { setProblemForm } = useContext(DataContext);
  return (
    <>
      <div className="card">
        <div className="flex justify-between">
          <h2 className="h2 font-bold uppercase text-blue-600">Create new proposal for review</h2>
          <RxCross1
            className="cursor-pointer"
            onClick={() => setProblemForm(false)}
            size={23}
          />
        </div>
        <div className="card__body">
          <form className="form" method="GET" action="/">
            <label className="form__label font-bold">
              Proposal Topic 
              <input className="form__input" type="text" required="required" />
            </label>
            <label className="form__label font-extrabold ">
              Proposal Clear Description
              <textarea
                className="block p-2.5 w-full border mt-1"
                rows="9"
                type="text"
                required="required"
              />
            </label>
            <label className="form__label font-bold">
              Proposal Start Date
              <input className="form__input" type="date" required="required" />
            </label>
            <label className="form__label font-bold">
              Proposal End Date
              <input className="form__input" type="date" required="required" />
            </label>
            
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100   dark:border-gray-600  mt-2"
            >
              Add Proposal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProblemForm;
