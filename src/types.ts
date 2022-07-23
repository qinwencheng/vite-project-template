export interface ProductLine {
  manufacturer: string;
  updateDate: string;
  subProductLine: string;
  createDate: string;
  codeId: number;
  materialOwner: string;
  updater: string;
  year: string;
  productLine: string;
  code: string;
  id: number;
  creator: string;
}

export interface Progress {
  manufacturer: string;
  updater: string;
  updateDate: string;
  code: string;
  creator: string;
  hardwareProgress: string;
  createDate: string;
  codeId: number;
  purchaseProgress: string;
  id: number;
  year: string;
  overallProgress: string;
  softwareProgress: string;
}

export interface CodeInfo {
  fdppm: number;
  createDate: string;
  sampleStatus: boolean;
  deliveryStatus: string;
  iqcTestItems: string;
  productLines: ProductLine[];
  priority: string;
  progress: Progress;
  finishedDate: string;
  manufacturer: string;
  updateDate: string;
  iqcOwner: string;
  codeMaturity: string;
  newDev: boolean;
  updater: string;
  planDate: string;
  manufacturerAteCapability: boolean;
  code: string;
  datasheetReady: boolean;
  productLine: string;
  ateCapabilityId: number;
  mqeOwner: string;
  codeDesc: string;
  packageInfo: string;
  creator: string;
  spotCode: string;
  iqcCovered: boolean;
  category: string;
  owner: string;
  subCategory: string;
  id: number;
  ateCapability: string;
  bcmClassification: string;
  manufacturerOqcCapability: boolean;
  year: string;
  subCode: string;
  notDevReason: string;
  subProductLine: string;
  region: string;
  deviceOwner: string;
}

export interface RootObject {
  pageNum: number;
  totalPages: number;
  codeInfos: CodeInfo[];
  errorMsg: string;
  result: string;
  pageSize: number;
}
