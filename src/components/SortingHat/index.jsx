import React, { useState } from 'react';
import ConfirmationSection from './ConfirmationSection';
import RegistrationSection from './RegistrationSection';
import ApplicantsSection from './ApplicantsSection';
import HeadBanner from './Banner';

export default function SortingHat() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [applicants, setApplicants] = useState([]);
  const [remainingApplicants, setRemainingApplicants] = useState(0);
  const [houseCounts, setHouseCounts] = useState({
    ประชาชื่น: 0,
    อินทร: 0,
    กนกอาชีวะ: 0,
    บูรณพล: 0
  });

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      setInputValue(newValue);
    }
  };

  const handleConfirm = () => {
    setCount(inputValue);
    setRemainingApplicants(inputValue);
  };

  const getRandomHouse = () => {
    const minCount = Math.min(...Object.values(houseCounts));
    const availableHouses = Object.keys(houseCounts).filter((house) => houseCounts[house] === minCount);
    return availableHouses[Math.floor(Math.random() * availableHouses.length)];
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.name.value;
    if (newName.trim() !== '' && remainingApplicants > 0) {
      const house = getRandomHouse();
      setApplicants([...applicants, { name: newName, house }]);
      setHouseCounts({ ...houseCounts, [house]: houseCounts[house] + 1 });
      setRemainingApplicants(remainingApplicants - 1);
      e.target.reset();
    }
  };

  const handleSubmit = () => {
    console.log(applicants);
  };

  return (
    <div>
      <HeadBanner />
      <div className="bg-gray-100">
        <div className="flex bg-gray-950 text-red-600" >
          <ConfirmationSection
            count={count}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleConfirm={handleConfirm}
          />
          <RegistrationSection
            remainingApplicants={remainingApplicants}
            handleNameSubmit={handleNameSubmit}
          />
        </div>
        <ApplicantsSection
          applicants={applicants}
        />
      </div>
    </div>

  );
}
