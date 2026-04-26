import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSsoConnectorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors#account_id DataCloudflareSsoConnectors#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors#max_items DataCloudflareSsoConnectors#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareSsoConnectorsResultVerification {
}
export declare function dataCloudflareSsoConnectorsResultVerificationToTerraform(struct?: DataCloudflareSsoConnectorsResultVerification): any;
export declare function dataCloudflareSsoConnectorsResultVerificationToHclTerraform(struct?: DataCloudflareSsoConnectorsResultVerification): any;
export declare class DataCloudflareSsoConnectorsResultVerificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSsoConnectorsResultVerification | undefined;
    set internalValue(value: DataCloudflareSsoConnectorsResultVerification | undefined);
    get code(): any;
    get status(): any;
}
export interface DataCloudflareSsoConnectorsResult {
}
export declare function dataCloudflareSsoConnectorsResultToTerraform(struct?: DataCloudflareSsoConnectorsResult): any;
export declare function dataCloudflareSsoConnectorsResultToHclTerraform(struct?: DataCloudflareSsoConnectorsResult): any;
export declare class DataCloudflareSsoConnectorsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareSsoConnectorsResult | undefined;
    set internalValue(value: DataCloudflareSsoConnectorsResult | undefined);
    get createdOn(): any;
    get emailDomain(): any;
    get enabled(): any;
    get id(): any;
    get updatedOn(): any;
    get useFedrampLanguage(): any;
    private _verification;
    get verification(): DataCloudflareSsoConnectorsResultVerificationOutputReference;
}
export declare class DataCloudflareSsoConnectorsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareSsoConnectorsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors cloudflare_sso_connectors}
*/
export declare class DataCloudflareSsoConnectors extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_sso_connectors";
    /**
    * Generates CDKTF code for importing a DataCloudflareSsoConnectors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSsoConnectors to import
    * @param importFromId The id of the existing DataCloudflareSsoConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSsoConnectors to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors cloudflare_sso_connectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSsoConnectorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSsoConnectorsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareSsoConnectorsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
