import { Alert, AlertTitle, TextField, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [batchNumber, setBatchNumber] = useState("");
  const [subDivNumber, setSubDivNumber] = useState("");
  const [refNumber, setRefNumber] = useState("");
  const [data, setData] = useState("");

  const Router = useRouter();

  const handleBill = async () => {
    if (batchNumber && subDivNumber && refNumber) {
      //  for print
      // `http://www.lesco.gov.pk/Modules/CustomerBill/BillInfo.asp?BatchNo=${batchNumber}&SubDiv=${subDivNumber}&RefNo=${refNumber}&RU=U&Exec=941N7&nCtID=8443142`

      //  for view bill
      setData(
        `http://www.lesco.gov.pk/Modules/CustomerBill/BillInfo.asp?nBatchNo=${batchNumber}&nSubDiv=${subDivNumber}&nRefNo=${refNumber}&strRU=U&btnViewBill=Proceed`
      );
      // Router.push(`http://www.lesco.gov.pk/Modules/CustomerBill/BillInfo.asp?nBatchNo=${batchNumber}&nSubDiv=${subDivNumber}&nRefNo=${refNumber}&strRU=U&btnViewBill=Proceed`);
    } else {
      alert('Please fill all field!')
    }
  };

  return (
    <main>
      <div>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
             Enter Reference Number
          </h1>
        </div>
        <form
          style={{
            paddingTop: "15px",
            display: "flex",
            alignItems:'center',
            flexDirection:'column'
          }}
        >
          <div>
            <TextField
              label="BatchNO"
              id="outlined-size-small"
              size="small"
              value={batchNumber}
              onChange={(e) => setBatchNumber(e.target.value)}
              style={{marginRight:'10px'}}
              />
            <TextField
              label="SubDiv"
              id="outlined-size-small"
              size="small"
              value={subDivNumber}
              onChange={(e) => setSubDivNumber(e.target.value)}
              style={{marginRight:'10px'}}
            />
            <TextField
              label="RefNo"
              id="outlined-size-small"
              size="small"
              value={refNumber}
              onChange={(e) => setRefNumber(e.target.value)}
            />
          </div>
          <div style={{paddingTop:'10px', marginBottom:'10px'}}>
            <Button
              style={{ marginLeft: "5px" }}
              variant="outlined"
              onClick={() => handleBill()}
            >
              View Bill
            </Button>
          </div>
        </form>
      </div>
      <div>{data && <iframe width="100%" height="515px" src={data} />}</div>
    </main>
  );
}
