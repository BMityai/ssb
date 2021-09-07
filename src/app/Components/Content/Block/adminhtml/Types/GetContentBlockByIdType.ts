import Helper from "sosise-core/build/Helper/Helper";
import GetItemsByContentBlockIdType from "./GetItemsByContentBlockIdType";

export default class GetContentBlocksByIdType {
    public id: number;
    public name: string;
    public title: string;
    public blockId: number;
    public pageTypeId: number;
    public positionId: number;
    public isEnable: boolean;
    public createdAt: Date;
    public items: {
        url: string;
        image: string;
        position: string;
    }[] = [];
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
        if (!this.contentBlock || !this.contentBlock.length) {
            // @todo throw exception 404
        }

        this.id = this.contentBlock.id;
        this.name = this.contentBlock.name;
        this.title = this.contentBlock.title;
        this.blockId = this.contentBlock.blockId;
        this.pageTypeId = this.contentBlock.pageTypeId;
        this.positionId = this.contentBlock.positionId;
        this.isEnable = this.contentBlock.isEnable;
        this.createdAt = this.contentBlock.createdAt;
    }

    /**
     * Set content block items
     */
    public setItems(items: GetItemsByContentBlockIdType[]): void {
        this.items = items;
    }
}
