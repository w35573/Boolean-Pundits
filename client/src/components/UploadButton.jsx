import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

const UploadButton = () => {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
      console.log(d);
    });
  };

  // useEffect(() => {
  //   if (items.length != 0) {
  //     axios
  //       .post("/api/student/enterAll", items)
  //       .then((response) => response.data)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // }, []);

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <button
        onClick={async () => {
          axios
            .post("/api/student/enterAll", { students: items })
            .then((response) => response.data)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadButton;
