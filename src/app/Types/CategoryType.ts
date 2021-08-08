export default class CategoryType {
    id: number;
    parentId: number;
    position: number;
    level: number;
    createdAt: Date;
    updatedAt: Date;
    attributes: {
        [key: string]: any
    } = {}
    children: CategoryType[]

    constructor(categoryInstances: any) {
        this.initProps(categoryInstances)
    }

    private initProps(categoryInstances: any): void {
        this.id = categoryInstances[0].entity_id;
        this.parentId = categoryInstances[0].parent_id;
        this.position = categoryInstances[0].position;
        this.level = categoryInstances[0].level;
        this.createdAt = categoryInstances[0].createdAt;
        this.updatedAt = categoryInstances[0].updatedAt;

        for(const categoryInstance of categoryInstances) {
            if(categoryInstance.value) {
                this.attributes[categoryInstance.code] = categoryInstance.value;

            }
        }
    }


}