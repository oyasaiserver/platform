import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationCustomPropertiesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The allowed values of the custom property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#allowed_values OrganizationCustomProperties#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value of the custom property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#default_value OrganizationCustomProperties#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The description of the custom property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#description OrganizationCustomProperties#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the custom property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#property_name OrganizationCustomProperties#property_name}
    */
    readonly propertyName: string;
    /**
    * Whether the custom property is required
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#required OrganizationCustomProperties#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * The type of the custom property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#value_type OrganizationCustomProperties#value_type}
    */
    readonly valueType?: string;
    /**
    * Who can edit the values of the custom property. Can be one of 'org_actors' or 'org_and_repo_actors'. If not specified, the default is 'org_actors' (only organization owners can edit values)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#values_editable_by OrganizationCustomProperties#values_editable_by}
    */
    readonly valuesEditableBy?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties github_organization_custom_properties}
*/
export declare class OrganizationCustomProperties extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_custom_properties";
    /**
    * Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationCustomProperties to import
    * @param importFromId The id of the existing OrganizationCustomProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationCustomProperties to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_properties github_organization_custom_properties} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationCustomPropertiesConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationCustomPropertiesConfig);
    private _allowedValues?;
    get allowedValues(): string[];
    set allowedValues(value: string[]);
    resetAllowedValues(): void;
    get allowedValuesInput(): string[];
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _propertyName?;
    get propertyName(): string;
    set propertyName(value: string);
    get propertyNameInput(): string;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): any;
    private _valueType?;
    get valueType(): string;
    set valueType(value: string);
    resetValueType(): void;
    get valueTypeInput(): string;
    private _valuesEditableBy?;
    get valuesEditableBy(): string;
    set valuesEditableBy(value: string);
    resetValuesEditableBy(): void;
    get valuesEditableByInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
