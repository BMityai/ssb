import Validator from 'validatorjs';
import ValidationException from 'sosise-core/build/Exceptions/Validation/ValidationException';
import Helper from 'sosise-core/build/Helper/Helper';

/**
 * If you need more validation rules, see: https://github.com/mikeerickson/validatorjs
 */
export default class UpdateOrCreateContentBlockUnifier {

    private params: any;

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
        const validator = new Validator(this.params, {
            name: ['required', 'string'],
            blockId: ['required', 'string'],
            pageTypeId: ['required', 'string'],
            positionId: ['required', 'string'],
            items: ['required', 'array'],
        });

        // If it fails throw exception
        if (validator.fails()) {
            throw new ValidationException('Validation exception', (validator.errors.all() as any));
        }
        
        // Items validation
        for(const item of this.params.items) {
            const validator = new Validator(JSON.parse(item), {
                id: ['required', 'string'],
                url: ['required', 'string'],
                image: ['required', 'string'],
            });
            // If it fails throw exception
            if (validator.fails()) {
                throw new ValidationException('Validation exception', (validator.errors.all() as any));
            }
        }


        // Check if file exists in tmp dir
        this.checkIfFileExistsInTmpDir(this.params);



    }

    /**
     * Request data mapping
     */
    private map() {
        // this.jwt = this.params.jwt;
    }

    private checkIfFileExistsInTmpDir(path: string): boolean {
        Helper.dump(path);
        return true;
    }
}
