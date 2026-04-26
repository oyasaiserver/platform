import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePagesDomainsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains#account_id DataCloudflarePagesDomains#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains#max_items DataCloudflarePagesDomains#max_items}
    */
    readonly maxItems?: number;
    /**
    * Name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains#project_name DataCloudflarePagesDomains#project_name}
    */
    readonly projectName: string;
}
export interface DataCloudflarePagesDomainsResultValidationData {
}
export declare function dataCloudflarePagesDomainsResultValidationDataToTerraform(struct?: DataCloudflarePagesDomainsResultValidationData): any;
export declare function dataCloudflarePagesDomainsResultValidationDataToHclTerraform(struct?: DataCloudflarePagesDomainsResultValidationData): any;
export declare class DataCloudflarePagesDomainsResultValidationDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesDomainsResultValidationData | undefined;
    set internalValue(value: DataCloudflarePagesDomainsResultValidationData | undefined);
    get errorMessage(): any;
    get method(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export interface DataCloudflarePagesDomainsResultVerificationData {
}
export declare function dataCloudflarePagesDomainsResultVerificationDataToTerraform(struct?: DataCloudflarePagesDomainsResultVerificationData): any;
export declare function dataCloudflarePagesDomainsResultVerificationDataToHclTerraform(struct?: DataCloudflarePagesDomainsResultVerificationData): any;
export declare class DataCloudflarePagesDomainsResultVerificationDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesDomainsResultVerificationData | undefined;
    set internalValue(value: DataCloudflarePagesDomainsResultVerificationData | undefined);
    get errorMessage(): any;
    get status(): any;
}
export interface DataCloudflarePagesDomainsResult {
}
export declare function dataCloudflarePagesDomainsResultToTerraform(struct?: DataCloudflarePagesDomainsResult): any;
export declare function dataCloudflarePagesDomainsResultToHclTerraform(struct?: DataCloudflarePagesDomainsResult): any;
export declare class DataCloudflarePagesDomainsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePagesDomainsResult | undefined;
    set internalValue(value: DataCloudflarePagesDomainsResult | undefined);
    get certificateAuthority(): any;
    get createdOn(): any;
    get domainId(): any;
    get id(): any;
    get name(): any;
    get status(): any;
    private _validationData;
    get validationData(): DataCloudflarePagesDomainsResultValidationDataOutputReference;
    private _verificationData;
    get verificationData(): DataCloudflarePagesDomainsResultVerificationDataOutputReference;
    get zoneTag(): any;
}
export declare class DataCloudflarePagesDomainsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePagesDomainsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains cloudflare_pages_domains}
*/
export declare class DataCloudflarePagesDomains extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pages_domains";
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesDomains to import
    * @param importFromId The id of the existing DataCloudflarePagesDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesDomains to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains cloudflare_pages_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesDomainsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePagesDomainsConfig);
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
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    private _result;
    get result(): DataCloudflarePagesDomainsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
