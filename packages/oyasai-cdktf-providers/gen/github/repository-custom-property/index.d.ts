import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryCustomPropertyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the custom property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#property_name RepositoryCustomProperty#property_name}
    */
    readonly propertyName: string;
    /**
    * Type of the custom property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#property_type RepositoryCustomProperty#property_type}
    */
    readonly propertyType: string;
    /**
    * Value of the custom property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#property_value RepositoryCustomProperty#property_value}
    */
    readonly propertyValue: string[];
    /**
    * Name of the repository which the custom properties should be on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#repository RepositoryCustomProperty#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property github_repository_custom_property}
*/
export declare class RepositoryCustomProperty extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_custom_property";
    /**
    * Generates CDKTF code for importing a RepositoryCustomProperty resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCustomProperty to import
    * @param importFromId The id of the existing RepositoryCustomProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCustomProperty to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property github_repository_custom_property} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCustomPropertyConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryCustomPropertyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _propertyName?;
    get propertyName(): string;
    set propertyName(value: string);
    get propertyNameInput(): string;
    private _propertyType?;
    get propertyType(): string;
    set propertyType(value: string);
    get propertyTypeInput(): string;
    private _propertyValue?;
    get propertyValue(): string[];
    set propertyValue(value: string[]);
    get propertyValueInput(): string[];
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
