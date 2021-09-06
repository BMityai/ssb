import Helper from "sosise-core/build/Helper/Helper";

export default interface GetContentBlocksType {
    id: number;
    name: string;
    title: string;
    block: string;
    pageType: string;
    isEnable: boolean;
    createdAt: Date;
}
