import { result } from "lodash";
import Helper from "sosise-core/build/Helper/Helper";
import GetItemsByContentBlockIdType from "./GetItemsByContentBlockIdType";
import GetProductsByContentBlockIdType from "./GetProductsByContentBlockIdType";

export default class GetContentBlockByPageType {
    id: number;
    name: string;
    block: string;
    pageType: string;
    position: string;
    isEnable: boolean;
    createdAt: Date;
    items: GetItemsByContentBlockIdType[] = [];
    products: GetProductsByContentBlockIdType[] = [];
    private contentBlock: any

    /**
     * Constructor
     * @param contentBlock 
     */
    constructor(contentBlock: any) {
        this.contentBlock = contentBlock;
        this.setProps();
    }

    /**
     * Set class properties
     */
    private setProps() {
        this.id = this.contentBlock.id;
        this.name = this.contentBlock.name;
        this.block = this.contentBlock.block;
        this.pageType = this.contentBlock.pageType;
        this.position = this.contentBlock.position;
        this.isEnable = this.contentBlock.isEnable;
        this.createdAt = this.contentBlock.createdAt;

    }
    
    /**
     * Set content block items
     */

    public setContentBlockItems(items: GetItemsByContentBlockIdType[]): void {
        this.items = items;
    }


}
