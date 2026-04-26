import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustRiskBehaviorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior#account_id DataCloudflareZeroTrustRiskBehavior#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareZeroTrustRiskBehaviorBehaviors {
}
export declare function dataCloudflareZeroTrustRiskBehaviorBehaviorsToTerraform(struct?: DataCloudflareZeroTrustRiskBehaviorBehaviors): any;
export declare function dataCloudflareZeroTrustRiskBehaviorBehaviorsToHclTerraform(struct?: DataCloudflareZeroTrustRiskBehaviorBehaviors): any;
export declare class DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflareZeroTrustRiskBehaviorBehaviors | undefined;
    set internalValue(value: DataCloudflareZeroTrustRiskBehaviorBehaviors | undefined);
    get description(): any;
    get enabled(): any;
    get name(): any;
    get riskLevel(): any;
}
export declare class DataCloudflareZeroTrustRiskBehaviorBehaviorsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior}
*/
export declare class DataCloudflareZeroTrustRiskBehavior extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_risk_behavior";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustRiskBehavior resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustRiskBehavior to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustRiskBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustRiskBehavior to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustRiskBehaviorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustRiskBehaviorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _behaviors;
    get behaviors(): DataCloudflareZeroTrustRiskBehaviorBehaviorsMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
