import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2BucketCorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors#account_id DataCloudflareR2BucketCors#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors#bucket_name DataCloudflareR2BucketCors#bucket_name}
    */
    readonly bucketName: string;
}
export interface DataCloudflareR2BucketCorsRulesAllowed {
}
export declare function dataCloudflareR2BucketCorsRulesAllowedToTerraform(struct?: DataCloudflareR2BucketCorsRulesAllowed): any;
export declare function dataCloudflareR2BucketCorsRulesAllowedToHclTerraform(struct?: DataCloudflareR2BucketCorsRulesAllowed): any;
export declare class DataCloudflareR2BucketCorsRulesAllowedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketCorsRulesAllowed | undefined;
    set internalValue(value: DataCloudflareR2BucketCorsRulesAllowed | undefined);
    get headers(): any;
    get methods(): any;
    get origins(): any;
}
export interface DataCloudflareR2BucketCorsRules {
}
export declare function dataCloudflareR2BucketCorsRulesToTerraform(struct?: DataCloudflareR2BucketCorsRules): any;
export declare function dataCloudflareR2BucketCorsRulesToHclTerraform(struct?: DataCloudflareR2BucketCorsRules): any;
export declare class DataCloudflareR2BucketCorsRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareR2BucketCorsRules | undefined;
    set internalValue(value: DataCloudflareR2BucketCorsRules | undefined);
    private _allowed;
    get allowed(): DataCloudflareR2BucketCorsRulesAllowedOutputReference;
    get exposeHeaders(): any;
    get id(): any;
    get maxAgeSeconds(): any;
}
export declare class DataCloudflareR2BucketCorsRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareR2BucketCorsRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors cloudflare_r2_bucket_cors}
*/
export declare class DataCloudflareR2BucketCors extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_bucket_cors";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketCors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketCors to import
    * @param importFromId The id of the existing DataCloudflareR2BucketCors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketCors to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors cloudflare_r2_bucket_cors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketCorsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2BucketCorsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _rules;
    get rules(): DataCloudflareR2BucketCorsRulesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
