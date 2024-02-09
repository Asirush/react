import React, { useState } from 'react';
import './App.css';
import CompanyList from './components/CompanyList';

function App() {
  const [companySearch, setCompanySearch] = useState('');
  const [selectedReliability, setSelectedReliability] = useState('');

  let data = [
    {
      "name": "LLC 'MegaTrans'",
      "type": "Transportation Services",
      "quantity": 589,
      "distance": 34,
      "reliability": "reliable"
    },
    {
      "name": "Joint-Stock Company 'ProductService'",
      "type": "Food Products",
      "quantity": 983,
      "distance": 71,
      "reliability": "unreliable"
    },
    {
      "name": "Individual Entrepreneur 'TechnoProduct'",
      "type": "Electronics",
      "quantity": 317,
      "distance": 49,
      "reliability": "reliable"
    },
    {
      "name": "Group of Companies 'GlobalLogistics'",
      "type": "Logistics",
      "quantity": 725,
      "distance": 85,
      "reliability": "suspicious"
    },
    {
      "name": "Transport Company 'ExpressCargo'",
      "type": "Transportation Services",
      "quantity": 286,
      "distance": 28,
      "reliability": "reliable"
    },
    {
      "name": "LLC 'FurnitureStore'",
      "type": "Furniture",
      "quantity": 97,
      "distance": 13,
      "reliability": "unreliable"
    },
    {
      "name": "Individual Entrepreneur 'EuroGoods'",
      "type": "Consumer Goods",
      "quantity": 718,
      "distance": 94,
      "reliability": "reliable"
    },
    {
      "name": "Joint-Stock Company 'TextileMaster'",
      "type": "Textile Products",
      "quantity": 510,
      "distance": 50,
      "reliability": "unreliable"
    },
    {
      "name": "Group of Companies 'PromTech'",
      "type": "Industrial Equipment",
      "quantity": 842,
      "distance": 40,
      "reliability": "reliable"
    },
    {
      "name": "Transport Company 'CargoLine'",
      "type": "Transportation Services",
      "quantity": 480,
      "distance": 42,
      "reliability": "suspicious"
    },
    {
      "name": "LLC 'AutoChemistry'",
      "type": "Auto Chemistry and Car Cosmetics",
      "quantity": 315,
      "distance": 46,
      "reliability": "suspicious"
    },
    {
      "name": "Individual Entrepreneur 'FoodMaster'",
      "type": "Food Products",
      "quantity": 687,
      "distance": 67,
      "reliability": "unreliable"
    },
    {
      "name": "Joint-Stock Company 'ElectroTech'",
      "type": "Electrotechnical Products",
      "quantity": 239,
      "distance": 24,
      "reliability": "suspicious"
    },
    {
      "name": "Group of Companies 'LogisticService'",
      "type": "Logistics",
      "quantity": 572,
      "distance": 58,
      "reliability": "reliable"
    },
    {
      "name": "Transport Company 'ExpressCargo'",
      "type": "Transportation Services",
      "quantity": 803,
      "distance": 89,
      "reliability": "reliable"
    },
    {
      "name": "LLC 'TradingHouse'",
      "type": "Consumer Goods",
      "quantity": 424,
      "distance": 45,
      "reliability": "suspicious"
    },
    {
      "name": "Individual Entrepreneur 'TextileShop'",
      "type": "Textile Products",
      "quantity": 945,
      "distance": 62,
      "reliability": "suspicious"
    },
    {
      "name": "Joint-Stock Company 'MedTech'",
      "type": "Medical Equipment",
      "quantity": 137,
      "distance": 16,
      "reliability": "reliable"
    },
    {
      "name": "Group of Companies 'AgroProduct'",
      "type": "Agricultural Products",
      "quantity": 392,
      "distance": 37,
      "reliability": "unreliable"
    },
    {
      "name": "Transport Company 'LogisticGroup'",
      "type": "Logistics",
      "quantity": 567,
      "distance": 51,
      "reliability": "suspicious"
    },
    {
      "name": "LLC 'AutoAccessories'",
      "type": "Auto Accessories and Spare Parts",
      "quantity": 285,
      "distance": 33,
      "reliability": "unreliable"
    },
    {
      "name": "Individual Entrepreneur 'FoodDelivery'",
      "type": "Food Delivery",
      "quantity": 629,
      "distance": 70,
      "reliability": "unreliable"
    },
    {
      "name": "Joint-Stock Company 'FurnitureWorld'",
      "type": "Furniture",
      "quantity": 784,
      "distance": 77,
      "reliability": "reliable"
    },
    {
      "name": "Group of Companies 'AutoService'",
      "type": "Auto Service",
      "quantity": 318,
      "distance": 38,
      "reliability": "suspicious"
    }
  ]
  ;

  let reliabilityTypes = [
      "reliable",
      "unreliable",
      "suspicious"
  ];

  const handleSearchChange = (e) => {
    setCompanySearch(e.target.value);
  };

  const handleReliabilityChange = (e) => {
    setSelectedReliability(e.target.value);
  };

  const filteredData = data.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(companySearch.toLowerCase());
    const matchesReliability = !selectedReliability || company.reliability === selectedReliability;

    return matchesSearch && matchesReliability;
  });

  return (
    <div className='App'>
      <input
        type="text"
        placeholder="Search by company name"
        value={companySearch}
        onChange={handleSearchChange}
      />
      <br/>
      <label htmlFor="reliability">Filter by Reliability: </label>
      <select
        id="reliability"
        value={selectedReliability}
        onChange={handleReliabilityChange}
      >
        <option value="">All</option>
        {reliabilityTypes.map((option, index) => (
          <option key={index} value={option.reliability}>{option.reliability}</option>
        ))}
      </select>

      <CompanyList data={filteredData} reliabilityTypes={reliabilityTypes} />
    </div>
  );
}

export default App;
