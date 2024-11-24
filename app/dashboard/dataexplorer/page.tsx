"use client";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid-community"; 
import "ag-grid-community/styles/ag-theme-alpine.css";  


export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [tableData, setTableData] = useState<Array<[]>>([]);
  const [columnDefs, setColumnDefs] = useState<Array<[]>>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data.data;
      if (data.length > 0) {
        // Automatically generate column definitions from the keys of the first row
        const columns = Object.keys(data[0]).map((key) => ({
          field: key,
          sortable: true,
          filter: true,
          resizable: true,
        }));
        setColumnDefs(columns);
        console.log(columns);
      }
      setTableData(data);
      setResponseMessage(
        response.data.message || "File uploaded successfully."
      );
    } catch (error: any) {
      console.log(error);
      setResponseMessage(error.response?.data?.error || "File upload failed.");
    }

    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <Box className="w-full max-w-lg mx-auto p-6 space-y-4 bg-gray-800 rounded-md">
      <Typography variant="h5" className="text-white">
        File Uploader
      </Typography>
      <Typography variant="body2" className="text-gray-400">
        Please upload a CSV file to process.
      </Typography>

      <label className="block w-full border-2 border-dashed border-gray-600 p-4 text-center rounded-md hover:bg-gray-700">
        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
        <CloudUploadIcon className="text-white mb-2" />
        <Typography variant="body2" className="text-gray-400">
          {file ? file.name : "Click or drag file to this area to upload"}
        </Typography>
      </label>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600"
      >
        Upload File
      </Button>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          animateRows={true}
        />
      </div>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Upload Status</DialogTitle>
        <DialogContent>
          <Typography>{responseMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
