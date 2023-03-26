import { useEffect, useState } from "react";
import { testCaseEp } from "@/pages/EndPoint";

const showData = () => {
    const [data, setData] = useState([]);

    let URL = testCaseEp;
  
  
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      const testCase = data.map((obj: any) => ({
        id: obj._id,
        runID: obj.run.id,
        name: obj.patients,
        samples: obj.sams,
      }));
      setData(testCase);
    };
  
    console.log(data);
  
    useEffect(() => {
      fetchData().catch((error) => console.error(error));
    }, []);
}

export default showData;