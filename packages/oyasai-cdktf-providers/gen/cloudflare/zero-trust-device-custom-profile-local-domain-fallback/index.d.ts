import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}
    */
    readonly domains: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#policy_id ZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}
    */
    readonly policyId: string;
}
export interface ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains {
    /**
    * A description of the fallback domain, displayed in the client UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#description ZeroTrustDeviceCustomProfileLocalDomainFallback#description}
    */
    readonly description?: string;
    /**
    * A list of IP addresses to handle domain resolution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#dns_server ZeroTrustDeviceCustomProfileLocalDomainFallback#dns_server}
    */
    readonly dnsServer?: string[];
    /**
    * The domain suffix to match when resolving locally.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#suffix ZeroTrustDeviceCustomProfileLocalDomainFallback#suffix}
    */
    readonly suffix: string;
}
export declare function zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToTerraform(struct?: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains | cdktf.IResolvable): any;
export declare function zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToHclTerraform(struct?: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _dnsServer?;
    get dnsServer(): string[];
    set dnsServer(value: string[]);
    resetDnsServer(): void;
    get dnsServerInput(): string[];
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    get suffixInput(): string;
}
export declare class ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback}
*/
export declare class ZeroTrustDeviceCustomProfileLocalDomainFallback extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_custom_profile_local_domain_fallback";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceCustomProfileLocalDomainFallback to import
    * @param importFromId The id of the existing ZeroTrustDeviceCustomProfileLocalDomainFallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceCustomProfileLocalDomainFallback to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _domains;
    get domains(): ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList;
    putDomains(value: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains[] | cdktf.IResolvable): void;
    get domainsInput(): any;
    get id(): any;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
