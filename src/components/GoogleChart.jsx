import React , {useState} from "react";
import { Chart } from "react-google-charts";
import Papa from 'papaparse';
import csvFile from './../data/Agri/Agricultural Contribution to GDP_API_NV.AGR.TOTL.ZS_DS2_en_csv_v2_3160861.csv'
import { useDrop } from 'react-dnd';
 
// var data = [
//     ["Age", "Weight"],
//     [8, 12],
//     [4, 5.5],
//     [11, 14],
//     [4, 5],
//     [3, 3.5],
//     [6.5, 7]
// ];

// var options = {
//     title: "Age vs. Weight comparison",
//     hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
//     vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
//     legend: "none"
// };

function GoogleChart (props) {
    console.log(props);
    const [parsedCsvData, setParsedCsvData] = useState([]);
    const [{ isOver, menuId }, dropRef] = useDrop(() => ({
        accept: 'card',
        drop: () => loadCsv(),
        collect: (monitor) => {
            console.log(monitor);
            return ({
          isOver: monitor.isOver(),
          menuId: monitor.menuId,   
        })},
      }));
    
    const loadCsv = () => {
        console.log(menuId);
        console.log(props.menuId);
        Papa.parse(csvFile, {
            download:true,
            complete: results => {
                const header = results.data[0]
                console.log(header)
                const csvResult = results.data.slice(1).map(item => {
                    return [item[0], Number(item[1])]
                })
                setParsedCsvData([ [header[0], header[1]] ,...csvResult])
                console.log(csvResult)
            },
        });
    }

    return (
        <>
        {/* <button onClick={loadCsv}>Load</button> */}
            <div ref={dropRef} style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12', float:'right', width:'70%' }}>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={parsedCsvData}
                // options={options}
            />
            </div>        
        </>
    )
}


 
export default GoogleChart;