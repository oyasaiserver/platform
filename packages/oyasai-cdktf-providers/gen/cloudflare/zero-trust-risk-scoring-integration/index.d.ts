import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustRiskScoringIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}
    */
    readonly accountId?: string;
    /**
    * Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#active ZeroTrustRiskScoringIntegration#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * Available values: "Okta".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#integration_type ZeroTrustRiskScoringIntegration#integration_type}
    */
    readonly integrationType: string;
    /**
    * A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
    * https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#reference_id ZeroTrustRiskScoringIntegration#reference_id}
    */
    readonly referenceId?: string;
    /**
    * The base url of the tenant, e.g. "https://tenant.okta.com".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#tenant_url ZeroTrustRiskScoringIntegration#tenant_url}
    */
    readonly tenantUrl: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}
*/
export declare class ZeroTrustRiskScoringIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_risk_scoring_integration";
    /**
    * Generates CDKTF code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustRiskScoringIntegration to import
    * @param importFromId The id of the existing ZeroTrustRiskScoringIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustRiskScoringIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustRiskScoringIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustRiskScoringIntegrationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get accountTag(): any;
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): any;
    get createdAt(): any;
    get id(): any;
    private _integrationType?;
    get integrationType(): string;
    set integrationType(value: string);
    get integrationTypeInput(): string;
    private _referenceId?;
    get referenceId(): string;
    set referenceId(value: string);
    resetReferenceId(): void;
    get referenceIdInput(): string;
    private _tenantUrl?;
    get tenantUrl(): string;
    set tenantUrl(value: string);
    get tenantUrlInput(): string;
    get wellKnownUrl(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
