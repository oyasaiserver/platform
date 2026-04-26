import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTokenValidationConfigsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs#max_items DataCloudflareTokenValidationConfigs#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs#zone_id DataCloudflareTokenValidationConfigs#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareTokenValidationConfigsResultCredentialsKeys {
}
export declare function dataCloudflareTokenValidationConfigsResultCredentialsKeysToTerraform(struct?: DataCloudflareTokenValidationConfigsResultCredentialsKeys): any;
export declare function dataCloudflareTokenValidationConfigsResultCredentialsKeysToHclTerraform(struct?: DataCloudflareTokenValidationConfigsResultCredentialsKeys): any;
export declare class DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationConfigsResultCredentialsKeys | undefined;
    set internalValue(value: DataCloudflareTokenValidationConfigsResultCredentialsKeys | undefined);
    get alg(): any;
    get crv(): any;
    get e(): any;
    get kid(): any;
    get kty(): any;
    get n(): any;
    get x(): any;
    get y(): any;
}
export declare class DataCloudflareTokenValidationConfigsResultCredentialsKeysList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference;
}
export interface DataCloudflareTokenValidationConfigsResultCredentials {
}
export declare function dataCloudflareTokenValidationConfigsResultCredentialsToTerraform(struct?: DataCloudflareTokenValidationConfigsResultCredentials): any;
export declare function dataCloudflareTokenValidationConfigsResultCredentialsToHclTerraform(struct?: DataCloudflareTokenValidationConfigsResultCredentials): any;
export declare class DataCloudflareTokenValidationConfigsResultCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareTokenValidationConfigsResultCredentials | undefined;
    set internalValue(value: DataCloudflareTokenValidationConfigsResultCredentials | undefined);
    private _keys;
    get keys(): DataCloudflareTokenValidationConfigsResultCredentialsKeysList;
}
export interface DataCloudflareTokenValidationConfigsResult {
}
export declare function dataCloudflareTokenValidationConfigsResultToTerraform(struct?: DataCloudflareTokenValidationConfigsResult): any;
export declare function dataCloudflareTokenValidationConfigsResultToHclTerraform(struct?: DataCloudflareTokenValidationConfigsResult): any;
export declare class DataCloudflareTokenValidationConfigsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationConfigsResult | undefined;
    set internalValue(value: DataCloudflareTokenValidationConfigsResult | undefined);
    get createdAt(): any;
    private _credentials;
    get credentials(): DataCloudflareTokenValidationConfigsResultCredentialsOutputReference;
    get description(): any;
    get id(): any;
    get lastUpdated(): any;
    get title(): any;
    get tokenSources(): any;
    get tokenType(): any;
}
export declare class DataCloudflareTokenValidationConfigsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationConfigsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs cloudflare_token_validation_configs}
*/
export declare class DataCloudflareTokenValidationConfigs extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_token_validation_configs";
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationConfigs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationConfigs to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationConfigs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs cloudflare_token_validation_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationConfigsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTokenValidationConfigsConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareTokenValidationConfigsResultList;
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
