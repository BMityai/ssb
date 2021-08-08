import { isSet } from "lodash";
import Helper from "sosise-core/build/Helper/Helper";
import CategoryType from "./CategoryType"

export default class AllCategoriesType {
    all: CategoryType[] = [];

    constructor(categories: any) {
        this.initProps(categories);
    }

    /**
     * Set class properties
     */
    private initProps(categories: any) {

        // Group categories by id
        var groupedCategories: {[key: string]: any} = {};
        for(const category of categories) {

            if(!groupedCategories[category.entity_id]) {
                groupedCategories[category.entity_id] = new Array();
                groupedCategories[category.entity_id].push(category);
                continue
            }
            groupedCategories[category.entity_id].push(category);
        }
        // Helper.dd(groupedCategories)

        for(const perCategoryGroup of Object.values(groupedCategories)) {
            const typedCategory = new CategoryType(perCategoryGroup);
            this.all.push(typedCategory);
        }
        this.all.sort((a, b) => a.position - b.position);
    }

    /**
     * Get menu categories
     */
    public getTree() {
        return this.prepareTree(this.all)
    }

    /**
     * Сreate category tree recursively
     */
    private prepareTree(categoryList: CategoryType[], parentId: number = 0) {
        const tree = new Array();
        for(const category of categoryList) {
            if(category.parentId === parentId) {
                category.children = this.prepareTree(categoryList, category.id);
                tree.push(category);
            }
        }

        return tree;    
    }
    
}
