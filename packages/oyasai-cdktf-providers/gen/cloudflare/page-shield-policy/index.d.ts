import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PageShieldPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The action to take if the expression matches
    * Available values: "allow", "log", "add_reporting_directives".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#action PageShieldPolicy#action}
    */
    readonly action: string;
    /**
    * A description for the policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#description PageShieldPolicy#description}
    */
    readonly description: string;
    /**
    * Whether the policy is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#enabled PageShieldPolicy#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#expression PageShieldPolicy#expression}
    */
    readonly expression: string;
    /**
    * The policy which will be applied
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#value PageShieldPolicy#value}
    */
    readonly value: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#zone_id PageShieldPolicy#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy cloudflare_page_shield_policy}
*/
export declare class PageShieldPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_page_shield_policy";
    /**
    * Generates CDKTF code for importing a PageShieldPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PageShieldPolicy to import
    * @param importFromId The id of the existing PageShieldPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PageShieldPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy cloudflare_page_shield_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PageShieldPolicyConfig
    */
    constructor(scope: Construct, id: string, config: PageShieldPolicyConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string;
    get id(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
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
