import React from 'react';

export default function RegistrationSection({ remainingApplicants, handleNameSubmit }) {
  return (
    <div className="py-12 md:w-1/2 lg:w-1/3 mx-auto">
      <div className="max-w-md md:max-w-3xl mx-auto px-4">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Register now!</h2>
          <form onSubmit={handleNameSubmit}>
            <div className="form-control items-center">
              <label className="label">
                <span className="label-text text-red-600">Name for Applicant</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered input-error w-full md:w-[80%] text-red-600"
                required
                disabled={remainingApplicants === 0}
              />
            </div>
            <div className="form-control mt-6 flex justify-center items-center">
              <button
                type="submit"
                className="btn btn-outline btn-error w-full md:w-[80%]"
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
