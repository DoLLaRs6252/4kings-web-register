import React, { useState } from 'react';
import image1 from '../../images/image-1.jpg';
import image2 from '../../images/image-2.jpg';
import image3 from '../../images/image-3.jpg';
import image4 from '../../images/image-4.jpg';

export default function ApplicantsSection({ applicants }) {
  const houseImages = {
    ประชาชื่น: image1,
    อินทร: image2,
    กนกอาชีวะ: image3,
    บูรณพล: image4
  };

  const houseCounts = {};
  applicants.forEach(applicant => {
    houseCounts[applicant.house] = (houseCounts[applicant.house] || 0) + 1;
  });

  const allHouses = Object.keys(houseImages);

  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleFilterClick = (house) => {
    setSelectedHouse(house);
  };

  const handleClearFilter = () => {
    setSelectedHouse(null);
  };

  return (
    <div className="bg-gray-950 p-6 shadow-lg text-red-600">

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-6">Applicants</h2>
          <div>
            {selectedHouse && (
              <button onClick={handleClearFilter} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Clear Filter
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allHouses.map((house, index) => (
            <div key={index} className={`p-4 `}>
              <div className="flex justify-around items-center">
                <img src={houseImages[house]} alt={`House ${house}`} className="w-16 h-16 mb-2 rounded-full mr-3" />
                <div className='m-4'>
                  <h3 className="text-xl font-bold mb-2">{house}</h3>
                  <p className="mb-4">Total Applicants: {houseCounts[house] || 0}</p>
                </div>
                <div className="flex justify-center">
                  <div className="m-4">
                    <button onClick={() => handleFilterClick(house)} className={`btn btn-outline btn-error text-white font-bold py-2 px-4  mt-4 ${selectedHouse === house ? 'bg-gray-300' : ''}`}>
                      Filter
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {applicants.map((applicant, index) => (
          <div key={index} className={`card p-4 bg-white shadow-lg rounded-lg ${selectedHouse && selectedHouse !== applicant.house ? 'hidden' : ''}`}>
            <h3 className="text-xl font-bold mb-2">Applicant {index + 1}</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-2"><span className="font-semibold">Name:</span> {applicant.name}</p>
                <p><span className="font-semibold">House:</span> {applicant.house}</p>
              </div>
              <img src={houseImages[applicant.house]} alt={`House ${applicant.house}`} className="w-16 h-16  items-center mb-2 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
