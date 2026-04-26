import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTokenValidationConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config#config_id DataCloudflareTokenValidationConfig#config_id}
    */
    readonly configId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config#zone_id DataCloudflareTokenValidationConfig#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareTokenValidationConfigCredentialsKeys {
}
export declare function dataCloudflareTokenValidationConfigCredentialsKeysToTerraform(struct?: DataCloudflareTokenValidationConfigCredentialsKeys): any;
export declare function dataCloudflareTokenValidationConfigCredentialsKeysToHclTerraform(struct?: DataCloudflareTokenValidationConfigCredentialsKeys): any;
export declare class DataCloudflareTokenValidationConfigCredentialsKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationConfigCredentialsKeys | undefined;
    set internalValue(value: DataCloudflareTokenValidationConfigCredentialsKeys | undefined);
    get alg(): any;
    get crv(): any;
    get e(): any;
    get kid(): any;
    get kty(): any;
    get n(): any;
    get x(): any;
    get y(): any;
}
export declare class DataCloudflareTokenValidationConfigCredentialsKeysList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationConfigCredentialsKeysOutputReference;
}
export interface DataCloudflareTokenValidationConfigCredentials {
}
export declare function dataCloudflareTokenValidationConfigCredentialsToTerraform(struct?: DataCloudflareTokenValidationConfigCredentials): any;
export declare function dataCloudflareTokenValidationConfigCredentialsToHclTerraform(struct?: DataCloudflareTokenValidationConfigCredentials): any;
export declare class DataCloudflareTokenValidationConfigCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareTokenValidationConfigCredentials | undefined;
    set internalValue(value: DataCloudflareTokenValidationConfigCredentials | undefined);
    private _keys;
    get keys(): DataCloudflareTokenValidationConfigCredentialsKeysList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config cloudflare_token_validation_config}
*/
export declare class DataCloudflareTokenValidationConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_token_validation_config";
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationConfig to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config cloudflare_token_validation_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareTokenValidationConfigConfig);
    private _configId?;
    get configId(): string;
    set configId(value: string);
    get configIdInput(): string;
    get createdAt(): any;
    private _credentials;
    get credentials(): DataCloudflareTokenValidationConfigCredentialsOutputReference;
    get description(): any;
    get id(): any;
    get lastUpdated(): any;
    get title(): any;
    get tokenSources(): any;
    get tokenType(): any;
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
