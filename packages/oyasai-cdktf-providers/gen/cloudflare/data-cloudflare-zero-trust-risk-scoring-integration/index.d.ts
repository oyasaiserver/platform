import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustRiskScoringIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration#account_id DataCloudflareZeroTrustRiskScoringIntegration#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration#integration_id DataCloudflareZeroTrustRiskScoringIntegration#integration_id}
    */
    readonly integrationId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}
*/
export declare class DataCloudflareZeroTrustRiskScoringIntegration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_risk_scoring_integration";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustRiskScoringIntegration to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustRiskScoringIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustRiskScoringIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustRiskScoringIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustRiskScoringIntegrationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get accountTag(): any;
    get active(): any;
    get createdAt(): any;
    get id(): any;
    private _integrationId?;
    get integrationId(): string;
    set integrationId(value: string);
    get integrationIdInput(): string;
    get integrationType(): any;
    get referenceId(): any;
    get tenantUrl(): any;
    get wellKnownUrl(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
