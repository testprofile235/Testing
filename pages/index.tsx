import { Alert, AlertTitle, TextField, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [batchNumber, setBatchNumber] = useState("");
  const [subDivNumber, setSubDivNumber] = useState("");
  const [refNumber, setRefNumber] = useState("");
  const [isError, setIsError] = useState(false);

  const Router = useRouter();

  const handleBill = async () => {
    if (batchNumber && subDivNumber && refNumber) {
      //  for print
      // `http://www.lesco.gov.pk/Modules/CustomerBill/BillInfo.asp?BatchNo=${batchNumber}&SubDiv=${subDivNumber}&RefNo=${refNumber}&RU=U&Exec=941N7&nCtID=8443142`
     
      const response = await axios.get(
        'http://www.lesco.gov.pk/Modules/CustomerBill/BillInfo.asp',
        {
          params: {
            nBatchNo: 13,
            nSubDiv: 11218,
            nRefNo: 2013101,
            strRU: 'U',
            btnViewBill: 'Proceed'
          }
        }
      );
      console.log(response.data);
      //  for view bill
      // Router.push(`http://www.lesco.gov.pk/Modules/CustomerBill/BillInfo.asp?nBatchNo=${batchNumber}&nSubDiv=${subDivNumber}&nRefNo=${refNumber}&strRU=U&btnViewBill=Proceed`);
    } else {
      setIsError(true);
    }
  };

  return (
    <main>
      {isError && <Alert severity="error">Please Fill All Field!</Alert>}
      <div>
        <h1>Online Bill Checker</h1>
        <TextField
          label="BatchNO"
          id="outlined-size-small"
          size="small"
          value={batchNumber}
          onChange={(e) => setBatchNumber(e.target.value)}
        />
        <TextField
          label="SubDiv"
          id="outlined-size-small"
          size="small"
          value={subDivNumber}
          onChange={(e) => setSubDivNumber(e.target.value)}
        />
        <TextField
          label="RefNo"
          id="outlined-size-small"
          size="small"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
        />
        <Button
          style={{ marginLeft: "5px" }}
          variant="outlined"
          onClick={() => handleBill()}
        >
          Check Bill
        </Button>
      </div>
    </main>
  );
}
