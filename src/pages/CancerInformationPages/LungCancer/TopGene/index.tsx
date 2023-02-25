import { Column, DualAxes } from "@ant-design/charts";
import { LeftCircleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
    
const data = [
        { name: "EGFR", type: "MUTANSAMPLE", value: 27294 },
        { name: "EGFR", type: "ALLSAMPLE", value: 103963 },
        { name: "KRAS", type: "MUTANSAMPLE", value: 6507 },
        { name: "KRAS", type: "ALLSAMPLE", value: 45776 },
        { name: "TP53", type: "MUTANSAMPLE", value: 5581 },
        { name: "TP53", type: "ALLSAMPLE", value: 13431 },
        { name: "TTN", type: "MUTANSAMPLE", value: 1444 },
        { name: "TTN", type: "ALLSAMPLE", value: 2899 },
        { name: "PCDHGA1", type: "MUTANSAMPLE", value: 1034 },
        { name: "PCDHGA1", type: "ALLSAMPLE", value: 2848 },
        { name: "MUC16", type: "MUTANSAMPLE", value: 1028 },
        { name: "MUC16", type: "ALLSAMPLE", value: 2888 },
        { name: "CSMD3", type: "MUTANSAMPLE", value: 1025 },
        { name: "CSMD3", type: "ALLSAMPLE", value: 2976 },
        { name: "PCDHA1", type: "MUTANSAMPLE", value: 1000 },
        { name: "PCDHA1", type: "ALLSAMPLE", value: 2816 },
        { name: "PCDHGA2", type: "MUTANSAMPLE", value: 993 },
        { name: "PCDHGA2", type: "ALLSAMPLE", value: 2848 },
        { name: "PCDHA2", type: "MUTANSAMPLE", value: 941 },
        { name: "PCDHA2", type: "ALLSAMPLE", value: 2860 },
        { name: "LRP1B", type: "MUTANSAMPLE", value: 936 },
        { name: "LRP1B", type: "ALLSAMPLE", value: 3195 },
        { name: "PCDHGA3", type: "MUTANSAMPLE", value: 931 },
        { name: "PCDHGA3", type: "ALLSAMPLE", value: 2848 },
        { name: "USH2A", type: "MUTANSAMPLE", value: 899 },
        { name: "USH2A", type: "ALLSAMPLE", value: 2864 },
        { name: "PCDHA3", type: "MUTANSAMPLE", value: 892 },
        { name: "PCDHA3", type: "ALLSAMPLE", value: 2860 },
        { name: "RYR2", type: "MUTANSAMPLE", value: 888 },
        { name: "RYR2", type: "ALLSAMPLE", value: 2756 },
        { name: "PIK3CA", type: "MUTANSAMPLE", value: 886 },
        { name: "PIK3CA", type: "ALLSAMPLE", value: 17726 },
        { name: "PCDHGB1", type: "MUTANSAMPLE", value: 877 },
        { name: "PCDHGB1", type: "ALLSAMPLE", value: 2772 },
        { name: "PCDHGA4", type: "MUTANSAMPLE", value: 852 },
        { name: "PCDHGA4", type: "ALLSAMPLE", value: 2845 },
        { name: "PCDHA4", type: "MUTANSAMPLE", value: 843 },
        { name: "PCDHA4", type: "ALLSAMPLE", value: 2860 },
        { name: "PCDHGB2", type: "MUTANSAMPLE", value: 815 },
        { name: "PCDHGB2", type: "ALLSAMPLE", value: 2770 },
]

const TopGene = () => {
    // const [data, setData] = useState([]);
    
    // const asyncFetch = () => {
    //     fetch('http://localhost:3000/mutation-lung-gene')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => {
    //         console.log('fetch data failed', error);
    //     });
    // };

    // useEffect(() => {
    //     asyncFetch();
    // }, []);

    const config = {
        data,
        xField: 'name',
        yField: 'value',
        seriesField: 'type',
        isGroup: true,
        columnStyle: {
          radius: [5, 5, 0, 0],
        },
    };
    return (<Column {...config} />);
};
        
export default TopGene;
