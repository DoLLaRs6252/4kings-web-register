import React from 'react';

export default function ApplicantsSection({ applicants }) {
  return (
    <div className="">
      <div className=" ">
        <div className="bg-gray-950 p-6  shadow-lg text-red-600">
          <h2 className="text-2xl font-bold mb-6">Applicants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {applicants.map((applicant, index) => (
              <div key={index} className="card p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Applicant {index + 1}</h3>
                <p className="mb-2"><span className="font-semibold">Name:</span> {applicant.name}</p>
                <p><span className="font-semibold">House:</span> {applicant.house}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
