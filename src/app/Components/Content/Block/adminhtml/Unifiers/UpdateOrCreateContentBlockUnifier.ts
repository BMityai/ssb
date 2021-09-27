import Validator from 'validatorjs';
import ValidationException from 'sosise-core/build/Exceptions/Validation/ValidationException';
import Helper from 'sosise-core/build/Helper/Helper';
import lodash from 'lodash'

/**
 * If you need more validation rules, see: https://github.com/mikeerickson/validatorjs
 */
export default class UpdateOrCreateContentBlockUnifier {

    private params: any;
    id: string;
    isEnable: boolean;
    name: string;
    title: string;
    blockId: number;
    pageTypeId: number;
    positionId: number;
    attributeSet: number[];
    items: {
        id: string;
        url: string;
        image: string;
        position: number;
        imageChange: boolean;
    }[];

    /**
     * Constructor
     */
    constructor(params: any) {
        // Remember incoming params
        this.params = params;

        // Validate, await is important otherwise we could not catch the exception
        this.validate();

        // Map data
        this.map();
    }

    /**
     * Request data validation
     */
    private validate() {

        // Create validator
        const validator = new Validator(this.params, this.getRules());

        // If it fails throw exception
        if (validator.fails()) {
            throw new ValidationException('Validation exception', (validator.errors.all() as any));
        }

        // validate items
        if (this.params.blockId === '1' || this.params.blockId === '2') {
            this.validateItems();
        }
    }

    /**
     * Request data mapping
     */
    private map() {
        this.id = this.params.id;
        this.isEnable = parseInt(this.params.isEnable) === 1;
        this.name= this.params.name;
        this.title = this.params.title;
        this.blockId = parseInt(this.params.blockId);
        this.pageTypeId = parseInt(this.params.pageTypeId);
        this.positionId = parseInt(this.params.positionId);

        // Set attributeSet
        const attributeSet = lodash.get(this.params, 'attributeSet', new Array());
        this.attributeSet = new Array();
        for(const set of attributeSet) {
            this.attributeSet.push(parseInt(set));
        }

        //Set items
        const items = lodash.get(this.params, 'items', new Array());
        this.items = new Array();
        for (const [key, item] of Object.entries(items)) {
            const parsedItem = JSON.parse(item as string);

            this.items.push({
                id: parsedItem.id,
                image: parsedItem.image,
                position: parseInt(key) + 1,
                url: parsedItem.url,
                imageChange: lodash.get(parsedItem, 'imageChange', false)
            })
        }
    }

    /**
     * Generate rules
     */
    private getRules() {
        const rules = {
            name: ['required', 'string'],
            blockId: ['required', 'string'],
            pageTypeId: ['required', 'string'],
            positionId: ['required', 'string'],
        } as any;

        // add items to rule if block id is 1 or 2
        if (this.params.blockId === '1' || this.params.blockId === '2') {
            rules.items = ['required', 'array']
        }

        // add attribute set to rule if block id is 3 or 4
        if (this.params.blockId === '3' || this.params.blockId === '4') {
            rules.attributeSet = ['required', 'array']
        }
        return rules;

    }

    /**
     * Validate items fir first & second block
     */
    private validateItems() {

        // Items validation
        for (const item of this.params.items) {

            const validator = new Validator(JSON.parse(item), {
                id: ['required'],
                url: ['required', 'string'],
                image: ['required', 'string'],
            });
            // If it fails throw exception
            if (validator.fails()) {
                throw new ValidationException('Validation exception', (validator.errors.all() as any));
            }
        }
    }
}
