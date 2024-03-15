import React from 'react';

export default function RegistrationSection({ remainingApplicants, handleNameSubmit }) {
  return (
    <div className=" py-12 w-[50%] ">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-[4rem] font-bold mb-6">Register now!</h2>
          <form onSubmit={handleNameSubmit}>
            <div className="form-control items-center">
              <label className="label">
                <span className="label-text text-red-600">Name for Applicant</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered input-error  w-[80%] text-red-600"
                required
                disabled={remainingApplicants === 0}
              />
            </div>
            <div className="form-control mt-6 items-center ">
              <button
                type="submit"
                className="btn btn-outline btn-error w-[80%] "
                disabled={remainingApplicants === 0}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}