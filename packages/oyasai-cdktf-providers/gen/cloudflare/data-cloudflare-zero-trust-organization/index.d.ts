import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization#account_id DataCloudflareZeroTrustOrganization#account_id}
    */
    readonly accountId?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization#zone_id DataCloudflareZeroTrustOrganization#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustOrganizationCustomPages {
}
export declare function dataCloudflareZeroTrustOrganizationCustomPagesToTerraform(struct?: DataCloudflareZeroTrustOrganizationCustomPages): any;
export declare function dataCloudflareZeroTrustOrganizationCustomPagesToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationCustomPages): any;
export declare class DataCloudflareZeroTrustOrganizationCustomPagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustOrganizationCustomPages | undefined;
    set internalValue(value: DataCloudflareZeroTrustOrganizationCustomPages | undefined);
    get forbidden(): any;
    get identityDenied(): any;
}
export interface DataCloudflareZeroTrustOrganizationLoginDesign {
}
export declare function dataCloudflareZeroTrustOrganizationLoginDesignToTerraform(struct?: DataCloudflareZeroTrustOrganizationLoginDesign): any;
export declare function dataCloudflareZeroTrustOrganizationLoginDesignToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationLoginDesign): any;
export declare class DataCloudflareZeroTrustOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustOrganizationLoginDesign | undefined;
    set internalValue(value: DataCloudflareZeroTrustOrganizationLoginDesign | undefined);
    get backgroundColor(): any;
    get footerText(): any;
    get headerText(): any;
    get logoPath(): any;
    get textColor(): any;
}
export interface DataCloudflareZeroTrustOrganizationMfaConfig {
}
export declare function dataCloudflareZeroTrustOrganizationMfaConfigToTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaConfig): any;
export declare function dataCloudflareZeroTrustOrganizationMfaConfigToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaConfig): any;
export declare class DataCloudflareZeroTrustOrganizationMfaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustOrganizationMfaConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustOrganizationMfaConfig | undefined);
    get allowedAuthenticators(): any;
    get amrMatchingSessionDuration(): any;
    get requiredAaguids(): any;
    get sessionDuration(): any;
}
export interface DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements {
}
export declare function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements): any;
export declare function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements): any;
export declare class DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements | undefined;
    set internalValue(value: DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements | undefined);
    get pinPolicy(): any;
    get requireFipsDevice(): any;
    get sshKeySize(): any;
    get sshKeyType(): any;
    get touchPolicy(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export declare class DataCloudflareZeroTrustOrganization extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_organization";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustOrganization to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustOrganizationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustOrganizationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowAuthenticateViaWarp(): any;
    get authDomain(): any;
    get autoRedirectToIdentity(): any;
    private _customPages;
    get customPages(): DataCloudflareZeroTrustOrganizationCustomPagesOutputReference;
    get denyUnmatchedRequests(): any;
    get denyUnmatchedRequestsExemptedZoneNames(): any;
    get isUiReadOnly(): any;
    private _loginDesign;
    get loginDesign(): DataCloudflareZeroTrustOrganizationLoginDesignOutputReference;
    private _mfaConfig;
    get mfaConfig(): DataCloudflareZeroTrustOrganizationMfaConfigOutputReference;
    get mfaRequiredForAllApps(): any;
    private _mfaSshPivKeyRequirements;
    get mfaSshPivKeyRequirements(): DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;
    get name(): any;
    get sessionDuration(): any;
    get uiReadOnlyToggleReason(): any;
    get userSeatExpirationInactiveTime(): any;
    get warpAuthSessionDuration(): any;
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
