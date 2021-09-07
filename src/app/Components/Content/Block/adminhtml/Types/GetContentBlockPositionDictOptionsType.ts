
export default class GetContentBlockPositionDictOptionsType {

    public pageType: {
        [key: number]: {
            id: number,
            value: string
        }
    } = {
        1: {
            id: 1,
            value: ''
        }
    }

    private positionType: any;

    /**
     * constructor
     */
    constructor(positionType: any) {
        this.positionType = positionType;
        this.setProps()
    }

    /**
     * Ser class properties
     */
    private setProps() {
        const pageTypeId = this.positionType.pageTypeId as number;
        this.pageType[pageTypeId] = {
            id: this.positionType.id,
            value: this.positionType.value
        }
    }
    


}
