const lungOverviewPage = '/lung-cancer/overview';
const liverOverviewPage = '/liver-cancer/overview';
const breastOverviewPage = '/breast-cancer/overview';
const thyroidOverviewPage = '/thyroid-cancer/overview';
const colorectalOverviewPage = '/colorectal-cancer/overview';
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
    case lungOverviewPage || lungCancerPage || lungDrugPage:
      resultLocation = 'lungCancerPage';
      break;
    case liverOverviewPage || liverCancerPage || liverDrugPage:
      resultLocation = 'liverCancerPage';
      break;
    case breastOverviewPage || breastCancerPage || breastDrugPage:
      resultLocation = 'breastCancerPage';
      break;
    case thyroidOverviewPage || thyroidCancerPage || thyroidDrugPage:
      resultLocation = 'thyroidCancerPage';
      break;
    case colorectalOverviewPage || colorectalCancerPage || colorectalDrugPage:
      resultLocation = 'colorectalCancerPage';
      break;
    default:
      resultLocation = '';
      break;
  }

  return resultLocation;
};
