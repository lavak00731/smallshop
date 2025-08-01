export interface InputandLabelInterface {
    label: string,
    inputType: string,
    name: string,
    fn: (name: string | null, value: string | null) => void,
    isRequired: boolean;
    order?: boolean;
}