import { server } from "./Api";

export const mutationLungGeneEp = `${server}/mutation-lung-gene`;
export const mutationLiverGeneEp = `${server}/mutation-liver-gene`;
export const mutationBreastGeneEp = `${server}/mutation-breast-gene`;
export const mutationThyroidGeneEp = `${server}/mutation-thyroid-gene`;
export const mutationColorectalEp = `${server}/mutation-colorectal-gene`;

export const nomalLungGeneEp = `${server}/nomal-lung-gene`;
export const nomalLiverGeneEp = `${server}/nomal-liver-gene`;
export const nomalBreastGeneEp = `${server}/nomal-breast-gene`;
export const nomalThyroidGeneEp = `${server}/nomal-thyroid-gene`;
export const nomalColorectalEp = `${server}/nomal-colorectal-gene`;

export const testCaseEp = `${server}/test-case`;
export const addTestCaseEp = `${server}/test-case/add`;

export const drugsInformationEp = `${server}/drugs-information`;
export const drugArticlesEp = `${server}/drugs-information/find`;

export const geneAndMutationEp = `${server}/mutation`;
export const geneMutationArticlesEp = `${server}/mutation/find`;

export const loginEp = `${server}/user/login`
