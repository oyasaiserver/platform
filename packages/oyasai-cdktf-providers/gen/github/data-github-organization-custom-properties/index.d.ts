import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationCustomPropertiesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}
    */
    readonly propertyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}
    */
    readonly valueType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#values_editable_by DataGithubOrganizationCustomProperties#values_editable_by}
    */
    readonly valuesEditableBy?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties github_organization_custom_properties}
*/
export declare class DataGithubOrganizationCustomProperties extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization_custom_properties";
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import
    * @param importFromId The id of the existing DataGithubOrganizationCustomProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties github_organization_custom_properties} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationCustomPropertiesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubOrganizationCustomPropertiesConfig);
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
