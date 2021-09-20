import AttributeSetType from "../../../AttributeSet/Types/AttributeSetType";
import GetContentBlockOptionsType from "./GetContentBlockOptionsType";
import GetContentBlockPositionDictOptionsType from "./GetContentBlockPositionDictOptionsType";

export default interface GetBlockOptionsType {
    blockOptions: GetContentBlockOptionsType[];
    pageTypeOptions: GetContentBlockOptionsType[];
    positionOptions: GetContentBlockPositionDictOptionsType[]
    attributeSetOptions: AttributeSetType[]
}
