import Validator from 'validatorjs';
import ValidationException from 'sosise-core/build/Exceptions/Validation/ValidationException';

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
        console.log(JSON.parse(this.params.items[0]).image.buffer)
        // // Create validator
        // const validator = new Validator(this.params, {
        //     jwt: ['required', 'string', 'min:20'],
        // });

        // // If it fails throw exception
        // if (validator.fails()) {
        //     throw new ValidationException('Validation exception', (validator.errors.all() as any));
        // }
    }

    /**
     * Request data mapping
     */
    private map() {
        // this.jwt = this.params.jwt;
    }
}
