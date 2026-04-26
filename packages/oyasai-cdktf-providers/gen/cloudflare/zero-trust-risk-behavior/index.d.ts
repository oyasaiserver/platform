import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustRiskBehaviorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior#account_id ZeroTrustRiskBehavior#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior#behaviors ZeroTrustRiskBehavior#behaviors}
    */
    readonly behaviors: {
        [key: string]: ZeroTrustRiskBehaviorBehaviors;
    } | cdktf.IResolvable;
}
export interface ZeroTrustRiskBehaviorBehaviors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior#enabled ZeroTrustRiskBehavior#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Available values: "low", "medium", "high".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior#risk_level ZeroTrustRiskBehavior#risk_level}
    */
    readonly riskLevel: string;
}
export declare function zeroTrustRiskBehaviorBehaviorsToTerraform(struct?: ZeroTrustRiskBehaviorBehaviors | cdktf.IResolvable): any;
export declare function zeroTrustRiskBehaviorBehaviorsToHclTerraform(struct?: ZeroTrustRiskBehaviorBehaviors | cdktf.IResolvable): any;
export declare class ZeroTrustRiskBehaviorBehaviorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): ZeroTrustRiskBehaviorBehaviors | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustRiskBehaviorBehaviors | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _riskLevel?;
    get riskLevel(): string;
    set riskLevel(value: string);
    get riskLevelInput(): string;
}
export declare class ZeroTrustRiskBehaviorBehaviorsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: ZeroTrustRiskBehaviorBehaviors;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): ZeroTrustRiskBehaviorBehaviorsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior}
*/
export declare class ZeroTrustRiskBehavior extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_risk_behavior";
    /**
    * Generates CDKTF code for importing a ZeroTrustRiskBehavior resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustRiskBehavior to import
    * @param importFromId The id of the existing ZeroTrustRiskBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustRiskBehavior to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustRiskBehaviorConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustRiskBehaviorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _behaviors;
    get behaviors(): ZeroTrustRiskBehaviorBehaviorsMap;
    putBehaviors(value: {
        [key: string]: ZeroTrustRiskBehaviorBehaviors;
    } | cdktf.IResolvable): void;
    get behaviorsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
