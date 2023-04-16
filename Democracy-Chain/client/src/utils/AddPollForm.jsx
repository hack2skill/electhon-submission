import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { DataContext } from "../context/Context";
const AddPollForm = () => {
  const { setFormModal } = useContext(DataContext);
  return (
    <>
      <div className="card">
        <div className="flex justify-between">
          <h2 className="h2 font-bold uppercase text-blue-600">Create new poll</h2>
          <RxCross1
            className="cursor-pointer"
            onClick={() => setFormModal(false)}
            size={23}
          />
        </div>
        <div className="card__body">
          <form className="form" method="GET" action="/">
            <label className="form__label font-bold">
              Election Name
              <input className="form__input" type="text" required="required" />
            </label>
            <label className="form__label font-bold">
              Election Description
              <textarea
                className="block p-2.5 w-full border"
                rows="4"
                type="text"
                required="required"
              />
            </label>
            <label className="form__label font-bold">
              Election Image URL
              <input className="form__input" type="url" required="required" />
            </label>
            <label className="form__label font-bold">
              Election Start Date
              <input className="form__input" type="date" required="required" />
            </label>
            <label className="form__label font-bold">
              Election End Date
              <input className="form__input" type="date" required="required" />
            </label>
            {/* <label className="form__label">
              Option 1
              <input className="form__input" type="text" required="required" />
            </label>
            <label className="form__label">
              Option 2
              <input className="form__input" type="text" required="required" />
            </label>
            <div>
              <span className="form__add-option">Add more options (+)</span>
            </div> */}
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100   dark:border-gray-600  mt-2"
            >
              Add Election
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPollForm;
