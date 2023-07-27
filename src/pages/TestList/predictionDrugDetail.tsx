import { Descriptions, List, Tag } from 'antd';
import DrugInformation from './prediction';
import CRUDService from '@/services/CRUDService';
import { useEffect, useState } from 'react';

const DrugPrediction = () => {
    const [data, setData] = useState([]);
    const currentLocation = location.pathname;
    const parts = currentLocation.split('/');
    const ID = parts[parts.length - 1];
    console.log(ID)
    // const getPredictDrug = async () => {
    //     try {
    //       const data = await CRUDService.getService('http://localhost:3000/drugs-information/get-drug?page=1&limit=5&typeCancer=lung', ID);
    //       setData(data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // } 
    const getPredictDrug = async () => {
        try {
          const data = await CRUDService.getAllService('http://localhost:3000/drugs-information/get-drug?page=1&limit=5&typeCancer=lung');
          setData(data.dataDrug);
        } catch (error) {
          console.log(error);
        }
    } 

    useEffect(() => {
        getPredictDrug();
    }, [])

  return (
      <>{data? <DrugInformation data={data}/>:<></>}</>
  );
};

export default DrugPrediction;
