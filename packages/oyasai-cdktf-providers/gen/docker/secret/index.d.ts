import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Base64-url-safe-encoded secret data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#data Secret#data}
    */
    readonly data: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#id Secret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * User-defined name of the secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#name Secret#name}
    */
    readonly name: string;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#labels Secret#labels}
    */
    readonly labels?: SecretLabels[] | cdktf.IResolvable;
}
export interface SecretLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#label Secret#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#value Secret#value}
    */
    readonly value: string;
}
export declare function secretLabelsToTerraform(struct?: SecretLabels | cdktf.IResolvable): any;
export declare function secretLabelsToHclTerraform(struct?: SecretLabels | cdktf.IResolvable): any;
export declare class SecretLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecretLabels | cdktf.IResolvable | undefined;
    set internalValue(value: SecretLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class SecretLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecretLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecretLabelsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret docker_secret}
*/
export declare class Secret extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_secret";
    /**
    * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Secret to import
    * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Secret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/secret docker_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretConfig
    */
    constructor(scope: Construct, id: string, config: SecretConfig);
    private _data?;
    get data(): string;
    set data(value: string);
    get dataInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _labels;
    get labels(): SecretLabelsList;
    putLabels(value: SecretLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
