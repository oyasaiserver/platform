import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldConfig extends cdktf.TerraformMetaArguments {
    /**
    * Ensures that the configuration is written or retrieved in normalized fashion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield#normalize DataCloudflareApiShield#normalize}
    */
    readonly normalize?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield#zone_id DataCloudflareApiShield#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareApiShieldAuthIdCharacteristics {
}
export declare function dataCloudflareApiShieldAuthIdCharacteristicsToTerraform(struct?: DataCloudflareApiShieldAuthIdCharacteristics): any;
export declare function dataCloudflareApiShieldAuthIdCharacteristicsToHclTerraform(struct?: DataCloudflareApiShieldAuthIdCharacteristics): any;
export declare class DataCloudflareApiShieldAuthIdCharacteristicsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiShieldAuthIdCharacteristics | undefined;
    set internalValue(value: DataCloudflareApiShieldAuthIdCharacteristics | undefined);
    get name(): any;
    get type(): any;
}
export declare class DataCloudflareApiShieldAuthIdCharacteristicsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiShieldAuthIdCharacteristicsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield cloudflare_api_shield}
*/
export declare class DataCloudflareApiShield extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShield resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShield to import
    * @param importFromId The id of the existing DataCloudflareApiShield that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShield to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield cloudflare_api_shield} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiShieldConfig);
    private _authIdCharacteristics;
    get authIdCharacteristics(): DataCloudflareApiShieldAuthIdCharacteristicsList;
    get id(): any;
    private _normalize?;
    get normalize(): boolean | cdktf.IResolvable;
    set normalize(value: boolean | cdktf.IResolvable);
    resetNormalize(): void;
    get normalizeInput(): any;
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
