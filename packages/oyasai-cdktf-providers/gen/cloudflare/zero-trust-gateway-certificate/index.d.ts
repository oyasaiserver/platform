import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustGatewayCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate#account_id ZeroTrustGatewayCertificate#account_id}
    */
    readonly accountId?: string;
    /**
    * Whether to activate the certificate on Cloudflare's edge. When true, the certificate will be activated. When false, the certificate will be deactivated at the edge. This is a Terraform-only field and does not appear in the API response. Monitor `binding_status` for the activation status. Once a certificate is activated, you may use the certificate to intercept traffic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate#activate ZeroTrustGatewayCertificate#activate}
    */
    readonly activate?: boolean | cdktf.IResolvable;
    /**
    * Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). Defaults to 1,825 days (5 years). **Important**: This field is only settable during the certificate creation.  Certificates becomes immutable after creation - use the `/activate` and `/deactivate` endpoints to manage certificate lifecycle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate#validity_period_days ZeroTrustGatewayCertificate#validity_period_days}
    */
    readonly validityPeriodDays?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate}
*/
export declare class ZeroTrustGatewayCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_certificate";
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayCertificate to import
    * @param importFromId The id of the existing ZeroTrustGatewayCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ZeroTrustGatewayCertificateConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _activate?;
    get activate(): boolean | cdktf.IResolvable;
    set activate(value: boolean | cdktf.IResolvable);
    resetActivate(): void;
    get activateInput(): any;
    get bindingStatus(): any;
    get certificate(): any;
    get createdAt(): any;
    get expiresOn(): any;
    get fingerprint(): any;
    get id(): any;
    get inUse(): any;
    get issuerOrg(): any;
    get issuerRaw(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadedOn(): any;
    private _validityPeriodDays?;
    get validityPeriodDays(): number;
    set validityPeriodDays(value: number);
    resetValidityPeriodDays(): void;
    get validityPeriodDaysInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
