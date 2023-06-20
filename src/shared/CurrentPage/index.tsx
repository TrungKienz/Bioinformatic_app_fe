const lungCancerPage = '/lung-cancer/gene-mutation';
const liverCancerPage = '/liver-cancer/gene-mutation';
const breastCancerPage = '/breast-cancer/gene-mutation';
const thyroidCancerPage = '/thyroid-cancer/gene-mutation';
const colorectalCancerPage = '/colorectal-cancer/gene-mutation';
const lungDrugPage = '/lung-cancer/drug';
const liverDrugPage = '/liver-cancer/drug';
const breastDrugPage = '/breast-cancer/drug';
const thyroidDrugPage = '/thyroid-cancer/drug';
const colorectalDrugPage = '/colorectal-cancer/drug';

export const currentPage = (currentLocation: string) => {
  let resultLocation;
  switch (currentLocation) {
    case lungCancerPage:
      resultLocation = 'lungCancerPage';
      break;
    case liverCancerPage:
      resultLocation = 'liverCancerPage';
      break;
    case breastCancerPage:
      resultLocation = 'breastCancerPage';
      break;
    case thyroidCancerPage:
      resultLocation = 'thyroidCancerPage';
      break;
    case colorectalCancerPage:
      resultLocation = 'colorectalCancerPage';
      break;
    case lungDrugPage:
      resultLocation = 'lungDrugPage';
      break;
    case liverDrugPage:
      resultLocation = 'liverDrugPage';
      break;
    case breastDrugPage:
      resultLocation = 'breastDrugPage';
      break;
    case thyroidDrugPage:
      resultLocation = 'thyroidDrugPage';
      break;
    case colorectalDrugPage:
      resultLocation = 'colorectalDrugPag';
      break;
    default:
      resultLocation = '';
      break;
  }

  return resultLocation;
};
