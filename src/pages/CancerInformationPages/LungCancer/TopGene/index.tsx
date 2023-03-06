import { Column } from '@ant-design/charts';
import { useState } from 'react';

const lungCancerPage = '/cancer/lung-cancer';
const liverCancerPage = '/cancer/liver-cancer';
const breastCancerPage = '/cancer/breast-cancer';
const thyroidCancerPage = '/cancer/thyroid-cancer';
const colorectalCancerPage = '/cancer/colorectal-cancer';

let URL = '';

if (location.pathname === lungCancerPage) {
URL = 'http://localhost:3000/mutation-lung-gene';
} else if (location.pathname === liverCancerPage) {
URL = 'http://localhost:3000/mutation-liver-gene';
} else if (location.pathname === breastCancerPage) {
URL = 'http://localhost:3000/mutation-breast-gene';
} else if (location.pathname === thyroidCancerPage) {
URL = 'http://localhost:3000/mutation-thyroid-gene';
} else if (location.pathname === colorectalCancerPage) {
URL = 'http://localhost:3000/mutation-colorectal-gene';
} else {
URL = '';
}
const asyncFetch = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const top20MutatedSamples = data
      .sort((a: any, b: any) => b.mutated_samples - a.mutated_samples)
      .slice(0, 20)
      .map((obj: any) => ({
        gene_name: obj.gene_name,
        mutated_samples: obj.mutated_samples,
        samples_tested: obj.samples_tested,
      }));

    // Remove duplicates
    const uniqueTop20MutatedSamples = Array.from(new Set(top20MutatedSamples.map((obj: any) => JSON.stringify(obj))))
      .map(str => JSON.parse(str));

    return uniqueTop20MutatedSamples;
  } catch (error) {
    console.error(error);
    return []; // return an empty array if there's an error
  }
};

const data3: { gene_name: string, value: number, type: string }[] = [];
asyncFetch()
  .then(myArray => {
    for (let i = 0; i < myArray.length; i++) {
      let currentObject = myArray[i];
      const newDataObject1 = {
        gene_name: currentObject.gene_name,
        value: currentObject.mutated_samples,
        type: 'mutated_samples',
      };
      const newDataObject2 = {
        gene_name: currentObject.gene_name,
        value: currentObject.samples_tested,
        type: 'samples_tested',
      };
      data3.push(newDataObject1, newDataObject2); 
    }
    return data3;
  })
  .catch(error => console.error(error));

const TopGene = () => {
  console.log(data3)

  const config = {
    data: data3.map(data3 => ({ x: data3.gene_name, y: data3.value, type: data3.type })),
    xField: 'x',
    yField: 'y',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
      radius: [5, 5, 0, 0],
    },
  };
  return <Column {...config} />;
};

export default TopGene;
