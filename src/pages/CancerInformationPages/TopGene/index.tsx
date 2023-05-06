import { Column } from '@ant-design/charts';
import { useEffect, useState } from 'react';
import { mutationLung20GeneEp, mutationLiver20GeneEp, mutationBreast20GeneEp, mutationThyroid20GeneEp, mutationColorectal20GeneEp } from '@/pages/EndPoint';

const lungCancerPage = '/cancer/lung-cancer';
const liverCancerPage = '/cancer/liver-cancer';
const breastCancerPage = '/cancer/breast-cancer';
const thyroidCancerPage = '/cancer/thyroid-cancer';
const colorectalCancerPage = '/cancer/colorectal-cancer';

const TopGene = () => {
  const [data, setData] = useState([]);

  let URL = '';

  if (location.pathname === lungCancerPage) {
    URL = mutationLung20GeneEp;
  } else if (location.pathname === liverCancerPage) {
    URL = mutationLiver20GeneEp;
  } else if (location.pathname === breastCancerPage) {
    URL = mutationBreast20GeneEp;
  } else if (location.pathname === thyroidCancerPage) {
    URL = mutationThyroid20GeneEp;
  } else if (location.pathname === colorectalCancerPage) {
    URL = mutationColorectal20GeneEp;
  } else {
    URL = '';
  }
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  console.log(data);
    const config = {
      data,
      xField: 'gene_name',
      yField: 'value',
      seriesField: 'type',
      isGroup: true,
      columnStyle: {
      radius: [5, 5, 0, 0],
      },
  };
  return (
    <div style={{ height: '80vh' }}>
      <Column {...config} height="100%"/>
    </div>
  );
};

export default TopGene;
