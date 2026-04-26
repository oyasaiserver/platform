import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustRiskScoringIntegrationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations#account_id DataCloudflareZeroTrustRiskScoringIntegrations#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations#max_items DataCloudflareZeroTrustRiskScoringIntegrations#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustRiskScoringIntegrationsResult {
}
export declare function dataCloudflareZeroTrustRiskScoringIntegrationsResultToTerraform(struct?: DataCloudflareZeroTrustRiskScoringIntegrationsResult): any;
export declare function dataCloudflareZeroTrustRiskScoringIntegrationsResultToHclTerraform(struct?: DataCloudflareZeroTrustRiskScoringIntegrationsResult): any;
export declare class DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustRiskScoringIntegrationsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustRiskScoringIntegrationsResult | undefined);
    get accountTag(): any;
    get active(): any;
    get createdAt(): any;
    get id(): any;
    get integrationType(): any;
    get referenceId(): any;
    get tenantUrl(): any;
    get wellKnownUrl(): any;
}
export declare class DataCloudflareZeroTrustRiskScoringIntegrationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations cloudflare_zero_trust_risk_scoring_integrations}
*/
export declare class DataCloudflareZeroTrustRiskScoringIntegrations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_risk_scoring_integrations";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustRiskScoringIntegrations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustRiskScoringIntegrations to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustRiskScoringIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustRiskScoringIntegrations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations cloudflare_zero_trust_risk_scoring_integrations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustRiskScoringIntegrationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustRiskScoringIntegrationsConfig);
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
    get result(): DataCloudflareZeroTrustRiskScoringIntegrationsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
