import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSchemaValidationOperationSettingsListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_operation_settings_list#max_items DataCloudflareSchemaValidationOperationSettingsList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_operation_settings_list#zone_id DataCloudflareSchemaValidationOperationSettingsList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareSchemaValidationOperationSettingsListResult {
}
export declare function dataCloudflareSchemaValidationOperationSettingsListResultToTerraform(struct?: DataCloudflareSchemaValidationOperationSettingsListResult): any;
export declare function dataCloudflareSchemaValidationOperationSettingsListResultToHclTerraform(struct?: DataCloudflareSchemaValidationOperationSettingsListResult): any;
export declare class DataCloudflareSchemaValidationOperationSettingsListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareSchemaValidationOperationSettingsListResult | undefined;
    set internalValue(value: DataCloudflareSchemaValidationOperationSettingsListResult | undefined);
    get mitigationAction(): any;
    get operationId(): any;
}
export declare class DataCloudflareSchemaValidationOperationSettingsListResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareSchemaValidationOperationSettingsListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_operation_settings_list cloudflare_schema_validation_operation_settings_list}
*/
export declare class DataCloudflareSchemaValidationOperationSettingsList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_schema_validation_operation_settings_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettingsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationOperationSettingsList to import
    * @param importFromId The id of the existing DataCloudflareSchemaValidationOperationSettingsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_operation_settings_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationOperationSettingsList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_operation_settings_list cloudflare_schema_validation_operation_settings_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSchemaValidationOperationSettingsListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSchemaValidationOperationSettingsListConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareSchemaValidationOperationSettingsListResultList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
