import React, { useState } from 'react';

function FileUpload({ onDataUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Assuming the file structure: "name,email" on each line
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        const lines = content.split('\n');
        const data = lines.map((line) => {
          const [name, email] = line.split(',');
          return { name, email };
        });
        onDataUpload(data);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="my-4">
      <input type="file" accept=".csv" onChange={handleFileChange} className="mr-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 rounded">
        Upload Data
      </button>
    </div>
  );
}

export default FileUpload;