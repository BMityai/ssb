import Helper from "sosise-core/build/Helper/Helper";

export default class GetContentBlocksByIdType {
    public id: number;
    public name: string;
    public block: string;
    public pageType: string;
    public district: string;
    public isEnable: boolean;
    public createdAt: Date;
    public items: {
        text: string;
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
        if(!this.contentBlock.length) {
            // @todo throw exception 404
        }

        this.id = this.contentBlock[0].id;
        this.name = this.contentBlock[0].name;
        this.block = this.contentBlock[0].block;
        this.pageType = this.contentBlock[0].pageType;
        this.district = this.contentBlock[0].district;
        this.isEnable = this.contentBlock[0].isEnable;
        this.createdAt = this.contentBlock[0].createdAt;
        this     
    }



}
