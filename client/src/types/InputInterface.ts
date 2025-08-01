export interface InputInterface {
    inputType: string,
    name: string,
    id: string,
    fn: (name: string, value: string) => void,
    isRequired: boolean
}